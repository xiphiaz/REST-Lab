angular.module('httpHeaderService', [])
    .factory('httpHeaderService', function () {

        // Private methods, namespaced for code clarity
        var privateMethods = {
            /**
             * grabbed and formatted from http://en.wikipedia.org/wiki/List_of_HTTP_header_fields
             * Build in excel with ="{""header"":"""&B4&""",""description"":"""&C4&""",""example"":"""&D4&""",""status"":"""&E4&""",""category"":""standard""},"
             */
            headerLibrary : {
                request:[
                    {"header":"Accept","description":"Content-Types that are acceptable for the response","example":"Accept: text/plain","status":"Permanent","category":"standard"},
                    {"header":"Accept-Charset","description":"Character sets that are acceptable","example":"Accept-Charset: utf-8","status":"Permanent","category":"standard"},
                    {"header":"Accept-Encoding","description":"List of acceptable encodings. See HTTP compression.","example":"Accept-Encoding: gzip, deflate","status":"Permanent","category":"standard"},
                    {"header":"Accept-Language","description":"List of acceptable human languages for response","example":"Accept-Language: en-US","status":"Permanent","category":"standard"},
                    {"header":"Accept-Datetime","description":"Acceptable version in time","example":"Accept-Datetime: Thu, 31 May 2007 20:35:00 GMT","status":"Provisional","category":"standard"},
                    {"header":"Authorization","description":"Authentication credentials for HTTP authentication","example":"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==","status":"Permanent","category":"standard"},
                    {"header":"Cache-Control","description":"Used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain","example":"Cache-Control: no-cache","status":"Permanent","category":"standard"},
                    {"header":"Connection","description":"What type of connection the user-agent would prefer","example":"Connection: keep-alive","status":"Permanent","category":"standard"},
                    {"header":"Cookie","description":"an HTTP cookie previously sent by the server with Set-Cookie (below)","example":"Cookie: $Version=1; Skin=new;","status":"Permanent: standard","category":"standard"},
                    {"header":"Content-Length","description":"The length of the request body in octets (8-bit bytes)","example":"Content-Length: 348","status":"Permanent","category":"standard"},
                    {"header":"Content-MD5","description":"A Base64-encoded binary MD5 sum of the content of the request body","example":"Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==","status":"Permanent","category":"standard"},
                    {"header":"Content-Type","description":"The MIME type of the body of the request (used with POST and PUT requests)","example":"Content-Type: application/x-www-form-urlencoded","status":"Permanent","category":"standard"},
                    {"header":"Date","description":"The date and time that the message was sent (in \"HTTP-date\" format as defined by RFC 2616)","example":"Date: Tue, 15 Nov 1994 08:12:31 GMT","status":"Permanent","category":"standard"},
                    {"header":"Expect","description":"Indicates that particular server behaviors are required by the client","example":"Expect: 100-continue","status":"Permanent","category":"standard"},
                    {"header":"From","description":"The email address of the user making the request","example":"From: user@example.com","status":"Permanent","category":"standard"},
                    {"header":"Host","description":"The domain name of the server (for virtual hosting), and the TCP port number on which the server is listening. The port number may be omitted if the port is the standard port for the service requested. Mandatory since HTTP/1.1. Although domain name are specified as case-insensitive, it is not specified whether the contents of the Host field should be interpreted in a case-insensitive manner and in practice some implementations of virtual hosting interpret the contents of the Host field in a case-sensitive manner.","example":"Host: en.wikipedia.org:80","status":"Permanent","category":"standard"},
                    {"header":"If-Match","description":"Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for methods like PUT to only update a resource if it has not been modified since the user last updated it.","example":"If-Match: \"737060cd8c284d8af7ad3082f209582d\"","status":"Permanent","category":"standard"},
                    {"header":"If-Modified-Since","description":"Allows a 304 Not Modified to be returned if content is unchanged","example":"If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT","status":"Permanent","category":"standard"},
                    {"header":"If-None-Match","description":"Allows a 304 Not Modified to be returned if content is unchanged, see HTTP ETag","example":"If-None-Match: \"737060cd8c284d8af7ad3082f209582d\"","status":"Permanent","category":"standard"},
                    {"header":"If-Range","description":"If the entity is unchanged, send me the part(s) that I am missing; otherwise, send me the entire new entity","example":"If-Range: \"737060cd8c284d8af7ad3082f209582d\"","status":"Permanent","category":"standard"},
                    {"header":"If-Unmodified-Since","description":"Only send the response if the entity has not been modified since a specific time.","example":"If-Unmodified-Since: Sat, 29 Oct 1994 19:43:31 GMT","status":"Permanent","category":"standard"},
                    {"header":"Max-Forwards","description":"Limit the number of times the message can be forwarded through proxies or gateways.","example":"Max-Forwards: 10","status":"Permanent","category":"standard"},
                    {"header":"Origin","description":"Initiates a request for cross-origin resource sharing (asks server for an 'Access-Control-Allow-Origin' response header) .","example":"Origin: http://www.example-social-network.com","status":"Permanent: standard","category":"standard"},
                    {"header":"Pragma","description":"Implementation-specific headers that may have various effects anywhere along the request-response chain.","example":"Pragma: no-cache","status":"Permanent","category":"standard"},
                    {"header":"Proxy-Authorization","description":"Authorization credentials for connecting to a proxy.","example":"Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==","status":"Permanent","category":"standard"},
                    {"header":"Range","description":"Request only part of an entity. Bytes are numbered from 0.","example":"Range: bytes=500-999","status":"Permanent","category":"standard"},
                    {"header":"Referer","description":"This is the address of the previous web page from which a link to the currently requested page was followed. (The word “referrer” is misspelled in the RFC as well as in most implementations.)","example":"Referer: http://en.wikipedia.org/wiki/Main_Page","status":"Permanent","category":"standard"},
                    {"header":"TE","description":"The transfer encodings the user agent is willing to accept: the same values as for the response header Transfer-Encoding can be used, plus the \"trailers\" value (related to the \"chunked\" transfer method) to notify the server it expects to receive additional headers (the trailers) after the last, zero-sized, chunk.","example":"TE: trailers, deflate","status":"Permanent","category":"standard"},
                    {"header":"User-Agent","description":"The user agent string of the user agent","example":"User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0","status":"Permanent","category":"standard"},
                    {"header":"Via","description":"Informs the server of proxies through which the request was sent.","example":"Via: 1.0 fred, 1.1 example.com (Apache/1.1)","status":"Permanent","category":"standard"},
                    {"header":"Warning","description":"A general warning about possible problems with the entity body.","example":"Warning: 199 Miscellaneous warning","status":"Permanent","category":"standard"},

                    {"header":"X-Requested-With","description":"mainly used to identify Ajax requests. Most JavaScript frameworks send this header with value of XMLHttpRequest","example":"X-Requested-With: XMLHttpRequest","status":null,"category":"non-standard"},
                    {"header":"DNT","description":"Requests a web application to disable their tracking of a user. This is Mozilla's version of the X-Do-Not-Track header (since Firefox 4.0 Beta 11). Safari and IE9 also have support for this header. On March 7, 2011, a draft proposal was submitted to IETF. The W3C Tracking Protection Working Group is producing a specification.","example":"DNT: 1 (Do Not Track Enabled) \n DNT: 0 (Do Not Track Disabled)","status":null,"category":"non-standard"},
                    {"header":"X-Forwarded-For","description":"a de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer","example":"X-Forwarded-For: client1, proxy1, proxy2\n X-Forwarded-For: 129.78.138.66, 129.78.64.103","status":null,"category":"non-standard"},
                    {"header":"X-Forwarded-Proto","description":"a de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (load balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS","example":"X-Forwarded-Proto: https","status":null,"category":"non-standard"},
                    {"header":"Front-End-Https","description":"Non-standard header used by Microsoft applications and load-balancers","example":"Front-End-Https: on","status":null,"category":"non-standard"},
                    {"header":"X-ATT-DeviceId","description":"Allows easier parsing of the MakeModel/Firmware that is usually found in the User-Agent String of AT&T Devices","example":"X-Att-Deviceid: GT-P7320/P7320XXLPG","status":null,"category":"non-standard"},
                    {"header":"X-Wap-Profile","description":"Links to an XML file on the Internet with a full description and details about the device currently connecting. In the example to the right is an XML file for an AT&T Samsung Galaxy S2.","example":"x-wap-profile: http://wap.samsungmobile.com/uaprof/SGH-I777.xml","status":null,"category":"non-standard"},
                    {"header":"Proxy-Connection","description":"Implemented as a misunderstanding of the HTTP specifications. Common because of mistakes in implementations of early HTTP versions. Has exactly the same functionality as standard Connection header.","example":"Proxy-Connection: keep-alive","status":null,"category":"non-standard"}
                ],
                response:[
                    {"header":"Access-Control-Allow-Origin","description":"Specifying which web sites can participate in cross-origin resource sharing","example":"Access-Control-Allow-Origin: *","status":"Provisional","category":"standard"},
                    {"header":"Accept-Ranges","description":"What partial content range types this server supports","example":"Accept-Ranges: bytes","status":"Permanent","category":"standard"},
                    {"header":"Age","description":"The age the object has been in a proxy cache in seconds","example":"Age: 12","status":"Permanent","category":"standard"},
                    {"header":"Allow","description":"Valid actions for a specified resource. To be used for a 405 Method not allowed","example":"Allow: GET, HEAD","status":"Permanent","category":"standard"},
                    {"header":"Cache-Control","description":"Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds","example":"Cache-Control: max-age=3600","status":"Permanent","category":"standard"},
                    {"header":"Connection","description":"Options that are desired for the connection","example":"Connection: close","status":"Permanent","category":"standard"},
                    {"header":"Content-Encoding","description":"The type of encoding used on the data. See HTTP compression.","example":"Content-Encoding: gzip","status":"Permanent","category":"standard"},
                    {"header":"Content-Language","description":"The language the content is in","example":"Content-Language: da","status":"Permanent","category":"standard"},
                    {"header":"Content-Length","description":"The length of the response body in octets (8-bit bytes)","example":"Content-Length: 348","status":"Permanent","category":"standard"},
                    {"header":"Content-Location","description":"An alternate location for the returned data","example":"Content-Location: /index.htm","status":"Permanent","category":"standard"},
                    {"header":"Content-MD5","description":"A Base64-encoded binary MD5 sum of the content of the response","example":"Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==","status":"Permanent","category":"standard"},
                    {"header":"Content-Disposition","description":"An opportunity to raise a \"File Download\" dialogue box for a known MIME type with binary format or suggest a filename for dynamic content. Quotes are necessary with special characters.","example":"Content-Disposition: attachment; filename=\"fname.ext\"","status":"Permanent","category":"standard"},
                    {"header":"Content-Range","description":"Where in a full body message this partial message belongs","example":"Content-Range: bytes 21010-47021/47022","status":"Permanent","category":"standard"},
                    {"header":"Content-Type","description":"The MIME type of this content","example":"Content-Type: text/html; charset=utf-8","status":"Permanent","category":"standard"},
                    {"header":"Date","description":"The date and time that the message was sent (in \"HTTP-date\" format as defined by RFC 2616)","example":"Date: Tue, 15 Nov 1994 08:12:31 GMT","status":"Permanent","category":"standard"},
                    {"header":"ETag","description":"An identifier for a specific version of a resource, often a message digest","example":"ETag: \"737060cd8c284d8af7ad3082f209582d\"","status":"Permanent","category":"standard"},
                    {"header":"Expires","description":"Gives the date/time after which the response is considered stale","example":"Expires: Thu, 01 Dec 1994 16:00:00 GMT","status":"Permanent: standard","category":"standard"},
                    {"header":"Last-Modified","description":"The last modified date for the requested object (in \"HTTP-date\" format as defined by RFC 2616)","example":"Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT","status":"Permanent","category":"standard"},
                    {"header":"Link","description":"Used to express a typed relationship with another resource, where the relation type is defined by RFC 5988","example":"Link: </feed>; rel=\"alternate\"","status":"Permanent","category":"standard"},
                    {"header":"Location","description":"Used in redirection, or when a new resource has been created.","example":"Location: http://www.w3.org/pub/WWW/People.html","status":"Permanent","category":"standard"},
                    {"header":"P3P","description":"This header is supposed to set P3P policy, in the form of P3P:CP=\"your_compact_policy\". However, P3P did not take off, most browsers have never fully implemented it, a lot of websites set this header with fake policy text, that was enough to fool browsers the existence of P3P policy and grant permissions for third party cookies.","example":"P3P: CP=\"This is not a P3P policy! See http://www.google.com/support/accounts/bin/answer.py?hl=en&answer=151657 for more info.\"","status":"Permanent","category":"standard"},
                    {"header":"Pragma","description":"Implementation-specific headers that may have various effects anywhere along the request-response chain.","example":"Pragma: no-cache","status":"Permanent","category":"standard"},
                    {"header":"Proxy-Authenticate","description":"Request authentication to access the proxy.","example":"Proxy-Authenticate: Basic","status":"Permanent","category":"standard"},
                    {"header":"Refresh","description":"Used in redirection, or when a new resource has been created. This refresh redirects after 5 seconds.","example":"Refresh: 5; url=http://www.w3.org/pub/WWW/People.html","status":"Proprietary/non-standard: a header extension introduced by Netscape and supported by most web browsers.","category":"standard"},
                    {"header":"Retry-After","description":"If an entity is temporarily unavailable, this instructs the client to try again later. Value could be a specified period of time (in seconds) or a HTTP-date.","example":"Example 1: Retry-After: 120\nExample 2: Retry-After: Fri, 04 Nov 2014 23:59:59 GMT","status":"Permanent","category":"standard"},
                    {"header":"Server","description":"A name for the server","example":"Server: Apache/2.4.1 (Unix)","status":"Permanent","category":"standard"},
                    {"header":"Set-Cookie","description":"An HTTP cookie","example":"Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1","status":"Permanent: standard","category":"standard"},
                    {"header":"Status","description":"The HTTP status of the response","example":"Status: 200 OK","status":" ? \"Status\" is not listed as a registered header. The \"Status-Line\" of a \"Response\" is defined by RFC2616 without any explicit \"Status:\" header name.","category":"standard"},
                    {"header":"Strict-Transport-Security","description":"A HSTS Policy informing the HTTP client how long to cache the HTTPS only policy and whether this applies to subdomains.","example":"Strict-Transport-Security: max-age=16070400; includeSubDomains","status":"Permanent: standard","category":"standard"},
                    {"header":"Trailer","description":"The Trailer general field value indicates that the given set of header fields is present in the trailer of a message encoded with chunked transfer-coding.","example":"Trailer: Max-Forwards","status":"Permanent","category":"standard"},
                    {"header":"Transfer-Encoding","description":"The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity.","example":"Transfer-Encoding: chunked","status":"Permanent","category":"standard"},
                    {"header":"Upgrade","description":"Ask the server to upgrade to another protocol.","example":"Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11","status":"Permanent","category":"standard"},
                    {"header":"Vary","description":"Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server.","example":"Vary: *","status":"Permanent","category":"standard"},
                    {"header":"Via","description":"Informs the client of proxies through which the response was sent.","example":"Via: 1.0 fred, 1.1 example.com (Apache/1.1)","status":"Permanent","category":"standard"},
                    {"header":"Warning","description":"A general warning about possible problems with the entity body.","example":"Warning: 199 Miscellaneous warning","status":"Permanent","category":"standard"},
                    {"header":"WWW-Authenticate","description":"Indicates the authentication scheme that should be used to access the requested entity.","example":"WWW-Authenticate: Basic","status":"Permanent","category":"standard"},

                    {"header":"X-Frame-Options","description":"Clickjacking protection: \"deny\" - no rendering within a frame, \"sameorigin\" - no rendering if origin mismatch","example":"X-Frame-Options: deny","status":null,"category":"non-standard"},
                    {"header":"X-XSS-Protection","description":"Cross-site scripting (XSS) filter","example":"X-XSS-Protection: 1; mode=block","status":null,"category":"non-standard"},
                    {"header":"Content-Security-Policy, X-Content-Security-Policy, X-WebKit-CSP","description":"Content Security Policy definition.","example":"X-WebKit-CSP: default-src 'self'","status":null,"category":"non-standard"},
                    {"header":"X-Content-Type-Options","description":"The only defined value, \"nosniff\", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type. This also applies to Google Chrome, when downloading extensions.","example":"X-Content-Type-Options: nosniff","status":null,"category":"non-standard"},
                    {"header":"X-Powered-By","description":"specifies the technology (e.g. ASP.NET, PHP, JBoss) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)","example":"X-Powered-By: PHP/5.4.0","status":null,"category":"non-standard"},
                    {"header":"X-UA-Compatible","description":"Recommends the preferred rendering engine (often a backward-compatibility mode) to use to display the content. Also used to activate Chrome Frame in Internet Explorer.","example":"X-UA-Compatible: IE=EmulateIE7\nX-UA-Compatible: IE=edge\nX-UA-Compatible: Chrome=1","status":null,"category":"non-standard"}
                ]
            }
        };

        var publicMethods = {
            getLibrary : function(){
                return privateMethods.headerLibrary;
            },
            getRequests : function(){
                return privateMethods.headerLibrary.request;
            },
            getResponses : function(){
                return privateMethods.headerLibrary.response;
            }
        };

        return publicMethods;
    })
;