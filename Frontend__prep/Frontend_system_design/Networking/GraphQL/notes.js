/**
 * GRAPHQL
 * 
 * TOPICS:
 * 1. What
 * 2. Why?? Benefits
 * 3. Rest vs GraphQL
 * 4. Building Blocks
 * 5. Small app 
 * 6. Leverage graphql from client (calling)
 * 7. Tools available
 * 8. Advanced
 */

/**
 * In REST, we have specific endpoint for specific data
 * 
 * ex:
 * /api/continents
 * /api/countries
 * /api/languages
 * 
 * 
 * 3 independent calls to your remote server.
 * combine these data's and do required task.
 * 
 * Using graphql, you can just make a single call from client.
 * In the remote server, you have a graphql server, which will make
 * independent calls to above 3 endpoints, combine the required asked
 * data and it will send it to the client, 
 * Here the load is reduced for client.
 * Inside server also you only write some basic stuff not complex,
 * here's the beauty of graphql.
 */

/**
 * GraphQL: Graph query language
 * since 2012 (Facebook)
 * 2015 --> open sourced
 * 
 *  continents
 *    - countries
 *       - languages
 * 
 *  At higher level if you see, most of the data is connected
 *  in the form of a graph like structure.
 * 
 *  Ex: You have friends, they have some, some mutuals.
 *      You liked some post, your frnds frnds like same. 
 * 
 */

/**
 *  Any data which is of graph like structure can be pulled using
 *  graphQL. 
 * 
 *  Client can decide what data is required. 
 */

/**
 * studio.apollographql.com --> visit this playground
 */

// Example:
// query ExampleQuery {
//    continents {
//       name
//       code
//    }
//    countries {
//       name
//       code
//    }
//    languages {
//       name 
//       code
//    }
// }

/**
 * Why GraphQL: 
 * Benefits:
 * 1. Avoid over-fetching (don't need extra data)
 * 2. Avoid under-fetching (one single request, supports nested queries)
 * 3. Better Mobile Performance (less hardware in mobiles)
 * 4. Efficiency & Precision
 * 5. Declarative data fetching (this is what I need, declarative)
 * 6. Structured/ Hierarchical structure
 * 7. Strongly Typed
 * 8. Introspection (you have to create doc, all the possible endpoints,
 *    what data can be requested/returned, all possible queries it
 *    supports ).
 * 9. Real time capabilities > Subscription (just like websockets in rest)
 */

// Example for Structured/ Hierarchical structure
// query ExampleQuery {
//    continents {
//       name 
//       countries {
//          name 
//          languages {
//             name
//          }
//       }
//    }
// }

/**
 * In rest, we have:
 * HTTP REQUEST
 * HTTP RESPONSE
 * HTTP STATUS CODE
 * 
 * These are not specific to REST, these are provided by HTTP,
 * REST leverages them.
 * 
 * Similarly, GRAPHQL leverages HTTP protocol. Although it does 
 * some extra work in order to optimise.
 * 
 * By default all the requests are POST method, you can configure it
 * although
 */

/**
 * REST vs GraphQL:
 * 
 * REST:
 * 1. Data fetching: Multiple endpoint
 * 2. Request Structure: Fixed structure + HTTP methods
 * 3. Over-fetching/ Under-fetching: Issues
 * 4. Response size: Fixed size
 * 5. Versioning: explicit versioning (/v1, /v2...)
 * 6. Schema Definition: Not well defined (you can make though)
 * 7. Real-time capabilities: Polling, web socket (you have to do explicitly)
 * 8. Tooling Support: Postman (3p)
 * 9. Caching: Relies on HTTP cache (it depends on http)
 * 10. Client control: No cient can't decide response
 * 11. Adoption and community: Widely adopted
 * 
 * 
 * GraphQL:
 * 1. Data fetching: Single endpoint
 * 2. Request Structure: Flexible (Query/ Mutation)
 * 3. Over-fetching/ Under-fetching: Resolved
 * 4. Response size: Flexibe size (client can decide)
 * 5. Versioning: Flexible nature
 * 6. Schema Definition: Explicit schema (typed, schema)
 * 7. Real-time capabilities: Out of scope support (subscription)
 * 8. Tooling Support: Playground (provided by graphql, some 3p too)
 * 9. Caching: Fine grained (client libs like apollo client makes cache easy)
 * 10. Client control: Yes cient decide response
 * 11. Adoption and community: Rapidly growing adoption, large community support.
 */

/**
 * Fundamentals:
 * 1. Creator(server): Who created those endpoints. Many server combinations are available in order to build this.
 * 2. Consumer (client): Your react app, you can just use fetch/xml req, in order to consume or use some libraries
 * 3. You have many libraries in order to leverage graphQL in many languages, 
 *    not just js, you have both server and client side libraries for this.
 * 4. Apollo server --> server (ex: this has to be definately build using any GraphQL server libraries)
 * 5. Apollo client --> client (ex: You can just use normal fetch or if you want some benefits/advanced 
 *    stuff(like caching,etc..) you can use GraphQL Client library).
 */

/**
 * Building blocks:
 * 1. Terminology remains same for GraphQL server and GraphQL client.
 * 2. Schema/Types: 
 * 3. Query/Mutation:
 * 4. Resolver: 
 * 
 * Schema/Types: These two are same in GraphQL.
 * Ex: 
 * type Country {
 *  code: String
 *  currency: String
 *  phone: String
 *  name: String
 *  ID: ID
 * }
 * 
 * Types:
 * 1. Scaler: (InBuilt just like typescript) ex: ID, String, Int, Boolean
 * 2. Custom Types: Country, Languages, Continent, etc...
 * 
 * Important: The language used is SDL (GraphQL schema definition language)
 * 
 * 
 * Query/Mutation:
 * 
 * Default used POST 
 * 
 * Query --> get data
 * Mutation --> Update data
 * 
 * 
 * Query ex: 
 * type Query{
 *   countries: [Country]
 * }
 * 
 * Mutation ex: 
 * type Mutation {
 *   language(id: ID): Language
 * }
 * 
 * 3. Resolvers: Functions which does all the core job, in schema we 
 *    just defined what data we receive and what we return, but the job 
 *    is done by resolvers.
 * 
 * Resolver: It also has 1-1 mapping.
 * Query: {
 *  countries: (parent, args, context, info) => {
 *   return ... ;
 *  }
 * }
 * 
 * parent: it gives the parent info as well, suppose the query is like below
 *          here parent is continent
 * 
 * continent {
 *   name
 *   countries {
 *    
 *   }
 * }
 * 
 * args: some filters
 * 
 * context: Inside graphQL server you have multiple resolvers, 
 *          if you want to have some common global data, which you want your
 *          resolvers to share, you can have it inside context.
 * 
 * info: path, execution, etc.. (not much needed)
 */

