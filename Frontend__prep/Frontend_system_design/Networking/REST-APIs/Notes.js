/**
 * Topics: 
 * 1. Rest API? 
 * 2. Why Rest API? 
 * 3. Benefits?
 * 4. Core important things (building blocks)
 * 5. Build small app (express app)
 * 6. Postman tool 
 * 7. Http 1/2/3
 * 8. Best practices (whether consumer/creator)
 * 8. Headers 
 */

/**
 * Building blocks: 
 * 1. URL (parts, why parts)
 * 2. Methods 
 * 3. Headers
 * 4. Request
 * 5. Response 
 * 6. Status code (some ack that we get some system)
 * 
 */

/**
 * Architecture: 
 * 1. Scaling --> when things get overloaded/ grown business.
 * 2. Frontend, backend been spilted to scale. 
 * 3. 1-tier architecture (both frontend,baclend, one place)
 * 4. 2-tier architecture (separate place (client and server) )
 * 5. 3-tier --> another layer (storage too)
 * 6. Goes on n-tier.....
 */

/**
 * 1. Communication happens via APIs, one of the popular one is REST
 *    between two web servers
 * 2. REST --> Representational state transfer --> how data should be 
 *             representated in your transfer protocol will be decided by this REST.
 * 3. API --> Appilcation programming interface, 
 *            An interface where two programming languages can use to talk to each other.
 * 4. HTTP --> REST is build on top of http, 
 *             http --> it defined the fundamentals on how data should be exchanged.
 * 
 * 
 * 5. Summary: 
 *   a. REST gives you some rules, conventions to build your APIs.
 *   b. http --> it defined the fundamentals on how data should be exchanged.
 *   c. API ---> An interface where two programming languages can use to talk to each other.
 */

/**
 * Benefits: 
 * 1. Ease of use 
 * 2. Stateless (powerful feature) (auth, preview context, whatever data), 
 *    here REST doesn't maintains any state. It doesn't maintain any state, we
 *    have to send all the data, it process it and responds.
 * 3. Scalability (capacity of server has to increased), can be done if used REST APIs
 * 4. Flexibility with data (of data, what type, json, xml). Java still uses xml.
 * 5. Uniform Interface (predefined) (it uses http, it leverages same url formats).
 * 6. Caching (on network layer, leverages REST). Can be done in client/server.
 * 7. Separation of concerns (diff langs, diff techs).
 * 8. Interoperability --> not language agnostic. 
 * 9. Ease of testing
 * 10. Security (can use https, auth header, provides more sercurity).
 * 
 */

/**
 * Building blocks: 
 * 
 * 1. Request format: 
 * a. HTTP Request line --> GET http://127/0/1/2250/styles/navigation.css HTTP/1.1
 *    (METHOD URL PROTOCOL).
 * b. Request headers (diff properties, behaviour)
 * c. HTTP body 
 * 
 * 2. Response format:
 * a. HTTP response status line ---> HTTP/1.1 200 OK
 * b. HTTP response headers 
 * c. Response body 
 */

/**
 * URL: 
 * ex: https://www.example.com/forum/questions/?tag=networking&order=west#top
 * https --> scheme 
 * www.example.com --> host ()
 * www --> subdomain (course. or any such thing)
 * example --> domain 
 * com ---> TLD (top level domain)
 * forum --> subdirectory
 * questions ---> subdirectory
 * tag=networking&organization=west --> query strings/params
 * tag --> key 
 * networking --> value 
 * key, value --> parameter 
 * top --> fragment (hash, used in frontend, holds extra info, see below for ex).
 * 
 * Imp notes: In this above url parts, hash is the only part where server
 *            doesn't receives this. 
 */

/**
 * 1. First reach server
 * 2. Dig deeper into the server using path, to reach right required place
 *     in the serve to execute that piece of code which is located their 
 *     is decided by this path also known as route.
 * 3. These can be a physical folder structure in a server or it can be some
 *     dynamic configuration. 
 * 4. Physical folder structure means, there can be a forum folder, inside it
 *     can have questions folder. 
 * 5. Most of the cases, this path can be dynamic, i.e it doesn't have a
 *     physcial folder in the server, this can be configured in the server.
 *     ex: flipkart.com/apple-iphone-12-black-64-gb (inside apple-... does n't
 *          exist physical in a server, it's dynamic).
 * 
 * 6. Fragments in url --> holds extra info, ex: if you want to send some page which
 *      is huge and you want your peer should reach extactly to a specific
 *      location/section, you can pass the page exact scroll height,
 *      so that it will reach their. 
 */

/**
 * APIs for basic todo app
 * 
 * These are routes or paths 
 * 1. https:localhost:5111/api/todos
 * 2. https:localhost:5111/api/users
 * 
 * CRUD Applications
 */

/**
 * Methods: 
 * 1. POST (Create)
 * 2. GET (read)
 * 3. PUT/PATCH (update)
 * 4. DELETE 
 * 
 * 5. HEAD --> Get to know what headers will be sent if i make a req.
 *             Usecase: To see if any headers are modified in the server 
 *                      to validate in the client .
 * 6. OPTIONS --> For security purposes, suppose if you make a req to a
 *                diff domain, before making actual req, it will
 *                make a OPTIONS req, to check if it can makae a req.
 *                Primary usecase: For auth, new security purposed for diff domains.
 *                Diff security related paths can be configured. 
 * 
 * 7. CONNECT --> Used to establish a connection between the resources,
 *                so that the next time a req is made, it is faster, 
 *                Ex: If you load something, you mean that you can interact
 *                    with diff services on use interaction, therefore we
 *                    can remove some extra hob, which is the hand shake
 *                    we do from client to server. 
 * 
 * 8. TRACE  --> This is used to diagnos the req and res in any of the resource
 *                when you just want to trace whats happening in client/server.
 *                Generally enabled in client, not in server, it may leak some server
 *                related info. 
 * 
 * 
 * PUT --> Profile data entire is sent to server for updating
 * PATCH --> Only few or one field is sent for updation.
 */

/**
 * Imp: All the data flown between client and server is serialized stringified
 *      data. 
 *      You have parse it whereever received. 
 */

/**
 * Best practices: 
 * 
 *              GET         POST       PUT          DELETE 
 * 
 * URL      /todos          /todos    /todos/:id    /todos/:id
 *          /todos/:id 
 * 
 * 
 * HAS REQ      NO          YES         YES          NO
 *   body
 */

/**
 * Headers: 
 * 
 * 1. Request Headers: 
 * a. Host --> Target host (domain name, port) -->                                  usecase: host:www.1.cdn.example.com
 * b. Origin --> Origin Host (The original domain name) --->                        usecase: host: www.example.com
 * c. Referer --> Indicates the previous web page making this request  -->          https://example.com/previous-page
 * d. User Agent --> Indentify the client --> ( User agent string --> browser info, operating system related info) ---> ex: Mozilla/5.0 (Intel Mac OS .....)
 * E. Accept --> Response content type --->    Ex: application/json
 * f. Accept-Language ---> Preferred response content language  ---> en-US, en:q=0.9, (q means priority)
 * g. Accept-encoding  ---> Encoding algorithm  --> data compression algo (common used --> gzip, deflate, br)
 * h. Connection  ---> Keep TCP connection open  --> keep-alive (no need to make handshake for every api call, use this header to eliminate this)
 *                   HTTP/1.1 --> uses this by default, mozilla browser (doesn't follow this, it still makes TCP for every api call).
 * i. Authorization  --> Send crendentials  --> (Authorization:Bearer-.....)
 * j. Cookie  --> Previous Server Tokens can be resend, this cookie is send on every call to server  ---> key=value,...
 * k. If-modified-since ---> we can have a duration and after that only, we will fetch again
 * l. Cache-control --> cache data, no need to fetch until x time, (for ex: menu card of restaurant doesn't change frequently in a day/month)
 * 
 * 
 * 2. Response Headers: 
 * a. Date ---> When the response was generated --> Thus, 30 Nov 2023 ...
 * b. Server --> Provides server info  --> Server; Apache/2.4.41(Unix) (can be harmful, make sure to explicitly remove unwanted things)
 * c. Content-Type --> Type of response content  ---> text/html, application/json,.....
 * d. Content-Length --> Original body response length --> 256 bytes (browser uses this to indicate the download %, as it knows the total content length).
 * e. Set-cookie --> Informs about cookie need to store for future response   ---> Set-cookie: user_id=123 (some hash kind of data)
 * f. Content-encoding --> Response content encoding --> br,qzip,....
 * g. Cache-control 
 * h. Last-modified 
 * i. Etag ---> new hash kind of thing (advanced, explore more), if etag in client/server is same, then modify it, or else throw error.
 * j. Expires --> at what duration this data can be valid.
 * 
 * 
 * ---> We also have different more headers, we will cover in different sections of course, 
 *      Access-control-.... headers (imp for CORS, )
 *      Access-control-Allow-Methods (PUT,GET,HEAD,POST,DELETE,OPTIONS)
 */

/**
 * Status code: 
 * 
 * Status-Range    Use Case            
 * 
 * 1xx           Information related
 * 
 * 2xx             Success
 * 
 * 3XX             Redirection
 * 
 * 4XX           Client Error code
 * 
 * 5XX            Server Error
 */

/**
 * 100 --->   please continue (keep sending data I'm listening)
 * 101 --->   Switching protocol (maybe from polling to websockets) (very rare)
 * 
 * 200 --->   OK (job is done)
 * 201 --->   Created
 * 202 --->   Accepted (now i will process it and send after finishing my job, don't worry/wait)
 * 204 --->   No content (whatever u said, i deleted, i won't send any data)
 * 206 --->   Partial Content (small bundles, boss I'm sending data in small packets, not completed but partial)
 * 
 * 301 --->   Moved Permanentally (redirect old users to new place/domain)
 * 302 --->   Temporary Moving 
 * 304 --->   Not modified (the resource which you were looking after is not modified)
 * 307 --->   302 = Retains method (explore)
 * 308 --->   301 = Retains method (explore)
 * 
 * 400 --->   Bad Request (wrong data, please send correct data)
 * 401 --->   Unauthorized (sorry, not allowed (not logged in))
 * 403 --->   Authorization (you are employee, but not authorized to go admin place)
 * 404 --->   Not Found 
 * 405 --->   Method not allowed (you are doing a POST method on a url, but that url doesn't have POST method in it).
 * 429 --->   Concurrent request
 * 
 * 500 --->   Internal Server Error
 * 502 --->   Bad Gateway (api gateway error, or proxy issue)
 * 503 --->   Service Unavailable 
 * 504 --->   Gateway timeout (retry, predefined timer set (not able to process within this timer and send you data, please retry it))
 * 507 --->   Insufficient storage (at server, usecase --> file update, processing)
 */