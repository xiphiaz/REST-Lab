angular.module('templates-app', ['_layouts/default.tpl.html', '_partials/navigation.tpl.html', 'home/home.tpl.html', 'projects/endpoints/endpoints.tpl.html', 'projects/projects.tpl.html']);

angular.module("_layouts/default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("_layouts/default.tpl.html",
    "<div id=\"header-container\" ui-view=\"navigation\"></div>\n" +
    "<div ui-view=\"main\" ng-animate=\"'fade'\"></div>");
}]);

angular.module("_partials/navigation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("_partials/navigation.tpl.html",
    "<div id=\"header\">\n" +
    "\n" +
    "    <nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                </button>\n" +
    "                <a class=\"navbar-brand\" href=\"/\">\n" +
    "                    <span class=\"fa-stack fa-lg\">\n" +
    "                      <i class=\"fa fa-square fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-flask fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    REST Lab</a>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li ui-route=\"/projects\" ng-class=\"{active:$uiRoute}\">\n" +
    "                        <a href=\"/projects\">Projects</a>\n" +
    "                    </li>\n" +
    "                    <li ui-route=\"/endpoints\" ng-class=\"{active:$uiRoute}\">\n" +
    "                        <a href=\"/endpoints\">Endpoints</a>\n" +
    "                    </li>\n" +
    "                    <!--<li class=\"dropdown\">-->\n" +
    "                        <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>-->\n" +
    "                        <!--<ul class=\"dropdown-menu\">-->\n" +
    "                            <!--<li><a href=\"#\">Action</a></li>-->\n" +
    "                            <!--<li><a href=\"#\">Another action</a></li>-->\n" +
    "                            <!--<li><a href=\"#\">Something else here</a></li>-->\n" +
    "                            <!--<li class=\"divider\"></li>-->\n" +
    "                            <!--<li><a href=\"#\">Separated link</a></li>-->\n" +
    "                            <!--<li class=\"divider\"></li>-->\n" +
    "                            <!--<li><a href=\"#\">One more separated link</a></li>-->\n" +
    "                        <!--</ul>-->\n" +
    "                    <!--</li>-->\n" +
    "                </ul>\n" +
    "                <!--<form class=\"navbar-form navbar-left\" role=\"search\">-->\n" +
    "                    <!--<div class=\"form-group\">-->\n" +
    "                        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\">-->\n" +
    "                    <!--</div>-->\n" +
    "                    <!--<button type=\"submit\" class=\"btn btn-default\">Submit</button>-->\n" +
    "                <!--</form>-->\n" +
    "                <!--<ul class=\"nav navbar-nav navbar-right\">-->\n" +
    "                    <!--<li><a href=\"#\">Link</a></li>-->\n" +
    "                    <!--<li class=\"dropdown\">-->\n" +
    "                        <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>-->\n" +
    "                        <!--<ul class=\"dropdown-menu\">-->\n" +
    "                            <!--<li><a href=\"#\">Action</a></li>-->\n" +
    "                            <!--<li><a href=\"#\">Another action</a></li>-->\n" +
    "                            <!--<li><a href=\"#\">Something else here</a></li>-->\n" +
    "                            <!--<li class=\"divider\"></li>-->\n" +
    "                            <!--<li><a href=\"#\">Separated link</a></li>-->\n" +
    "                        <!--</ul>-->\n" +
    "                    <!--</li>-->\n" +
    "                <!--</ul>-->\n" +
    "            </div><!-- /.navbar-collapse -->\n" +
    "        </div><!-- /.container-fluid -->\n" +
    "    </nav>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <h1>REST Lab<small> Putting your RESTful API through it's paces</small></h1>\n" +
    "\n" +
    "</div>");
}]);

angular.module("projects/endpoints/endpoints.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/endpoints/endpoints.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <h1>Endpoints <small>The url points that the api interface accesses</small></h1>\n" +
    "\n" +
    "    <button ng-if=\"!addFormVisible\" class=\"btn btn-primary\" ng-click=\"showAddForm(true)\">Add Endpoint</button>\n" +
    "\n" +
    "    <div class=\"alert alert-info alert-dismissable\" ng-show=\"addFormVisible\">\n" +
    "        <button type=\"button\" class=\"close\" aria-hidden=\"true\" ng-click=\"showAddForm(false)\">&times;</button>\n" +
    "        <h2>{{endpointFormMode == 'new' ? 'Add new top level' : 'Edit existing'}} endpoint</h2>\n" +
    "        <ng-form name=\"addEndpointForm\" role=\"form\" class=\"form-horizontal\">\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error':addEndpointForm.endpointUri.$dirty && addEndpointForm.endpointUri.$invalid}\">\n" +
    "                <label for=\"endpointUri\" class=\"col-sm-2 control-label\">Endpoint URI</label>\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <div class=\"input-group\">\n" +
    "                        <span class=\"input-group-addon\">{{project.url.protocol}}{{project.url.host}}:{{project.url.port}}</span>\n" +
    "                        <input type=\"text\" ng-model=\"newEndpoint.uri\" class=\"form-control\" id=\"endpointUri\" name=\"endpointUri\" placeholder=\"/example\" required>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-show=\"addEndpointForm.endpointUri.$dirty && addEndpointForm.endpointUri.$error.uriExists\">Endpoint already exists</span>\n" +
    "                <span class=\"help-block\" ng-show=\"addEndpointForm.endpointUri.$dirty && addEndpointForm.endpointUri.$error.required\">Endpoint too short</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error':addEndpointForm.endpointUri.$dirty && addEndpointForm.endpointUri.$invalid}\">\n" +
    "                <label for=\"endpointUri\" class=\"col-sm-2 control-label\">Endpoint Methods</label>\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <button class=\"btn btn-info\" ng-click=\"autodetectMethods(project, newEndpoint)\">Autodetect <i class=\"fa fa-question-circle\" tooltip=\"Auto fill the methods with an OPTIONS request to the endpoint defined above\"></i> </button>\n" +
    "                    <label class=\"checkbox-inline\" ng-repeat=\"(method,enabled) in newEndpoint.methods track by method\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"newEndpoint.methods[method]\" name=\"endpointMethod\"> {{method}}\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-show=\"addEndpointForm.endpointUri.$dirty && addEndpointForm.endpointUri.$error.uriExists\">Endpoint already exists</span>\n" +
    "                <span class=\"help-block\" ng-show=\"addEndpointForm.endpointUri.$dirty && addEndpointForm.endpointUri.$error.required\">Endpoint too short</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <button ng-disabled=\"!addEndpointForm.$dirty || addEndpointForm.$invalid\" class=\"btn btn-primary\" ng-click=\"addEndpoint(newEndpoint)\">Submit</button>\n" +
    "            <button class=\"btn\" ng-click=\"showAddForm(false)\">Cancel</button>\n" +
    "<pre>{{newEndpoint|json}}</pre>\n" +
    "        </ng-form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel panel-default\" ng-repeat=\"endpoint in project.endpoints\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            <h3>{{endpoint.uri}}</h3>\n" +
    "\n" +
    "            <span class=\"row\">\n" +
    "                <span class=\"col-sm-8\">\n" +
    "                    <a class=\"btn btn-primary disabled\">Configure Tests</a>\n" +
    "                    <a class=\"btn btn-success disabled\">Run Tests</a>\n" +
    "                </span>\n" +
    "                <span class=\"col-sm-4\">\n" +
    "                    <span class=\"pull-right\">\n" +
    "                        <button class=\"btn btn-info\" ng-click=\"showEditForm(endpoint)\">Edit Endpoint</button>\n" +
    "                        <button class=\"btn btn-danger\" ng-show=\"!deleteWarning\" ng-click=\"deleteWarning = true\">Delete Endpoint</button>\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "            </span>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"alert alert-danger col-sm-12\" ng-show=\"deleteWarning\">\n" +
    "                    <button type=\"button\" class=\"close\" aria-hidden=\"true\" ng-click=\"deleteWarning = false\">&times;</button>\n" +
    "                    <h4>Deleting endpoint!</h4>\n" +
    "                    <p>Caution, deleting an endpoint is irreversable - you will lose all related settings and test results. Are you really sure you want to do this?</p>\n" +
    "                    <button class=\"btn btn-danger\" ng-click=\"deleteEndpoint(endpoint)\">Yes I'm sure, delete this endpoint</button>\n" +
    "                    <button class=\"btn btn-info\" ng-click=\"deleteWarning = false\">No!, Take me back to safety</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <pre>{{$storage.restLab|json}}</pre>\n" +
    "\n" +
    "</div>");
}]);

angular.module("projects/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <h1>Projects <small>Each distinct project you are testing</small></h1>\n" +
    "\n" +
    "    <button ng-if=\"!addFormVisible\" class=\"btn btn-primary\" ng-click=\"showAddForm(true)\">Add Project</button>\n" +
    "\n" +
    "    <div class=\"alert alert-info alert-dismissable\" ng-show=\"addFormVisible\">\n" +
    "        <button type=\"button\" class=\"close\" aria-hidden=\"true\" ng-click=\"showAddForm(false)\">&times;</button>\n" +
    "        <h2>{{projectFormMode == 'new' ? 'Add new' : 'Edit existing'}} project</h2>\n" +
    "        <ng-form name=\"addProjectForm\" role=\"form\" class=\"form-horizontal\">\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error':addProjectForm.projectName.$dirty && addProjectForm.projectName.$invalid}\">\n" +
    "                <label for=\"projectName\" class=\"col-sm-2 control-label\">Project Name</label>\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" ng-model=\"newProject.name\" class=\"form-control\" id=\"projectName\" name=\"projectName\" placeholder=\"Enter project name\" required>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-show=\"addProjectForm.projectName.$invalid && addProjectForm.projectName.$dirty\">* Required</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error':addProjectForm.projectKey.$dirty && addProjectForm.projectKey.$invalid}\">\n" +
    "                <label for=\"projectKey\" class=\"col-sm-2 control-label\">Project Key</label>\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input disabled type=\"text\" ng-model=\"newProject.key\" class=\"form-control\" id=\"projectKey\" name=\"projectKey\" placeholder=\"Project key is determined by project name\">\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-show=\"addProjectForm.projectKey.$error.keyExists\">Project key already exists</span>\n" +
    "                <span class=\"help-block\" ng-show=\"addProjectForm.projectKey.$error.keyLength\">Project key invalid</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error':addProjectForm.projectBaseUrl.$dirty && addProjectForm.projectBaseUrl.$invalid}\">\n" +
    "                <label for=\"projectBaseUrl\" class=\"col-sm-2 control-label\">Project Base URL</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"input-group\">\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span> {{newProject.url.protocol || 'Protocol'}}</button>\n" +
    "                            <ul class=\"dropdown-menu\">\n" +
    "                                <li><a ng-click=\"newProject.url.protocol = 'http://'\">http://</a></li>\n" +
    "                                <li><a ng-click=\"newProject.url.protocol = 'https://'\">https://</a></li>\n" +
    "                            </ul>\n" +
    "                        </div><!-- /btn-group -->\n" +
    "                        <input type=\"text\" ng-model=\"newProject.url.host\" class=\"form-control\" id=\"projectBaseUrl\" name=\"projectBaseUrl\" placeholder=\"Base URL of the project\" required>\n" +
    "                    </div><!-- /input-group -->\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <label for=\"projectBaseUrlPort\" class=\"control-label\">Port</label>\n" +
    "                    <input type=\"text\" ng-model=\"newProject.url.port\" class=\"form-control\" id=\"projectBaseUrlPort\" name=\"projectBaseUrlPort\" placeholder=\"Enter port number\" required>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-show=\"addProjectForm.projectBaseUrl.$dirty && addProjectForm.projectBaseUrl.$error.required\">* Required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"addProjectForm.projectBaseUrl.$dirty && addProjectForm.projectBaseUrl.$error.urlInvalid\">Invalid url</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <button ng-disabled=\"!addProjectForm.$dirty || addProjectForm.$invalid\" class=\"btn btn-primary\" ng-click=\"addProject(newProject)\">Submit</button>\n" +
    "            <button class=\"btn\" ng-click=\"showAddForm(false)\">Cancel</button>\n" +
    "\n" +
    "        </ng-form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel panel-default\" ng-repeat=\"project in $storage.restLab.projects\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            <h3>{{project.name}} - {{project.url.protocol+project.url.host}}</h3>\n" +
    "            <div class=\"row\">\n" +
    "                <span class=\"col-sm-2\"><h4>Test statistics</h4></span>\n" +
    "                <span class=\"col-sm-10\">\n" +
    "                    <progress>\n" +
    "                        <bar ng-repeat=\"bar in project.statsGraph\" value=\"bar.value\" type=\"{{bar.type}}\">\n" +
    "                            <span ng-hide=\"bar.value < 5\">{{bar.name}} {{bar.value}}%</span>\n" +
    "                        </bar>\n" +
    "                    </progress>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <span class=\"row\">\n" +
    "                <span class=\"col-sm-8\">\n" +
    "                    <a class=\"btn btn-info\" href=\"/projects/{{project.key}}/endpoints\">Configure Endpoints</a>\n" +
    "                    <a class=\"btn btn-primary disabled\">Configure Tests</a>\n" +
    "                    <a class=\"btn btn-success disabled\">Run Tests</a>\n" +
    "                </span>\n" +
    "                <span class=\"col-sm-4\">\n" +
    "                    <span class=\"pull-right\">\n" +
    "                        <button class=\"btn btn-info\" ng-click=\"showEditForm(project)\">Edit Project</button>\n" +
    "                        <button class=\"btn btn-danger\" ng-show=\"!deleteWarning\" ng-click=\"deleteWarning = true\">Delete Project</button>\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "            </span>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"alert alert-danger col-sm-12\" ng-show=\"deleteWarning\">\n" +
    "                    <button type=\"button\" class=\"close\" aria-hidden=\"true\" ng-click=\"deleteWarning = false\">&times;</button>\n" +
    "                    <h4>Deleting project!</h4>\n" +
    "                    <p>Caution, deleting a project is irreversable - you will lose all endpoints and test results. Are you really sure you want to do this?</p>\n" +
    "                    <button class=\"btn btn-danger\" ng-click=\"deleteProject(project)\">Yes I'm sure, delete this project</button>\n" +
    "                    <button class=\"btn btn-info\" ng-click=\"deleteWarning = false\">No!, Take me back to safety</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);
