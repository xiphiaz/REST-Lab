

angular.module('app.projects.endpoints', [])

    .config(function(stateHelperProvider) {
        stateHelperProvider.addState('defaultLayout.projects.endpoints', {
            url: '/:projectKey/endpoints',
            views: {
                "main@defaultLayout": { // Points to the ui-view="main" in modal-layout.tpl.html
                    controller: 'EndpointsListCtrl as EndpointsListCtrl',
                    templateUrl: 'projects/endpoints/endpoints.tpl.html'
                },
                "endpointView@defaultLayout.endpoints": {
                    controller: 'EndpointViewCtrl as EndpointViewCtrl',
                    templateUrl: 'projects/endpoints/endpoint-view.tpl.html'
                },
                "endpointForm@defaultLayout.endpoints": {
                    controller: 'EndpointFormCtrl as EndpointFormCtrl',
                    templateUrl: 'projects/endpoints/endpoint-form.tpl.html'
                }
            }

        });
    })

    .controller('EndpointsListCtrl', function($rootScope, $scope, $stateParams) {
        var project = _.find($scope.$storage.restLab.projects, {key:$stateParams.projectKey});
        $scope.project = project;

        $scope.endpointFormVisible = project.endpoints.length === 0; //default to show when there are no endpoints
        $scope.endpointFormMode = 'new';


        $scope.$on('endpointChange', function(event, project){
            console.log('detected endpoint edit',project);
            $scope.$broadcast('endpointEdit', project); //fwd message to the children
        });

        $scope.$on('endpointFormClosed', function(event, message){
            if (message.type === 'add'){
                $scope.endpointFormVisible = false;
            }
        });

        $scope.showAddEndpointForm = function(){
            $scope.endpointFormVisible = true;
            $scope.$broadcast('endpointAdd'); //fwd message to the children
        };

    })

    .controller('EndpointViewCtrl', function($rootScope, $scope, apiInterface) {

        $scope.deleteEndpoint = function(endpoint){
            project.endpoints = _.without(project.endpoints, endpoint); //created is used as a unique key
        };

    })

    .controller('EndpointFormCtrl', function($rootScope, $scope, apiInterface) {


        var emptyEndpoint = {
            uri: {
                key: null,
                definition: null,
                breakdown: null
            },
            methods: {
                OPTIONS : false,
                GET : false,
                HEAD : false,
                POST : false,
                PUT : false,
                DELETE : false,
                PATCH : false
            }
        };

        $scope.newEndpoint = emptyEndpoint;


        $scope.$on('endpointEdit', function(event, message){

            if (!!$scope.endpoint && message.endpoint.uri.key == $scope.endpoint.uri.key){ //only open the active project edit page
                $scope.endpointFormVisible = true;
                $scope.endpointFormMode = 'edit';

                $scope.newEndpoint = _.clone(message.endpoint, true); //clear
                $scope.addEndpointForm.$setPristine();
            }else{
                $scope.endpointFormVisible = false; //close others
            }

        });

        $scope.$on('endpointAdd', function(event, message){
            console.log('detected endpoint add',message);
            if (_.isUndefined($scope.endpoint)){
                $scope.endpointFormVisible = true;
                $scope.endpointFormMode = 'add';
                $scope.newEndpoint = emptyEndpoint;
                $scope.addEndpointForm.$setPristine();
            }
        });

        $scope.$watch('newEndpoint.uri.definition', function(name){
            var existing = false;
            if (name){

                var variableRegex = /(\[.*?\])/g;
                var splitUri = name.split(variableRegex);

                var uriObject = _.map(splitUri, function(piece){
                    var match = piece.match(/\[(.*?)\]/);
                    var type = 'segment';
                    if (match){
                        piece = match[1];
                        type = 'variable';
                    }
                    return {
                        type: type,
                        val: piece
                    };
                });

                $scope.newEndpoint.uri.key = _.pluck(_.filter(uriObject, {type:'segment'}), 'val').join('');

                existing = _.find(project.endpoints, function(endpoint){
                    return endpoint.uri.key == $scope.newEndpoint.uri.key;
                });

                if (!!existing && $scope.endpointFormMode == 'edit' && existing.uri.key == $scope.newEndpoint.uri.key){
                    existing = false;
                }

                $scope.newEndpoint.uri.breakdown = uriObject;

            }
            $scope.addEndpointForm.endpointUri.$setValidity('uriExists', !existing);
            $scope.addEndpointForm.endpointUri.$setValidity('uriValid', !!$scope.newEndpoint.uri.breakdown);


        });

//        var resetForm = function(){
//            $scope.newEndpoint = emptyEndpoint;
//            $scope.addEndpointForm.$setPristine();
//            $scope.projectFormVisible = false;
//        };

        $scope.addNewEndpoint = function(endpoint){
            endpoint.created = moment();
            project.endpoints.push(endpoint);
        };

        $scope.updateEndpoint = function(endpoint){
            endpoint.updated = moment();
            var oldEndpoint = _.find(project.endpoints, {created:endpoint.created}); //created is used as a unique key

            oldEndpoint = _.merge(oldEndpoint, endpoint);
        };


        $scope.autodetectMethods = function(project, endpoint){

            var url = project.url.protocol + project.url.host + ':'+project.url.port + endpoint.uri.definition;
            apiInterface.options(url).then(function(response){
                var headers = response.headers();
                var allowedMethods = headers.allow.split(', ');

                endpoint.methods = _.mapValues(endpoint.methods, function(validity,method){
                    return allowedMethods.indexOf(method) !== -1;
                });
            });

            $scope.addEndpointForm.endpointMethod.$setViewValue($scope.addEndpointForm.endpointMethod.$viewValue); //dirty hack to setdirty

        };


    })

;
