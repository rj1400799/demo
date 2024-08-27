/**
 * Routing: 
 * 1. What & Why?
 * 2. Route configuration
 * 3. Nested Routes 
 * 4. Resolving data & Controlling Access
 */

/**
 * 1. Although it's a single page application, we can give an illusion to the users, i.e they can switch to different pages.
 * 2. Client-side routing: Angular watches & manipulates the URL and renders different components for different URLs. 
 * 3. Important: It's all happening in the browser! There's no server-side routing involved. 
 * 
 * Loading components based on the url.
 * client side routing (change routes)
 * read data from the url 
 * 
 * 4. Ex: 
 *          /users   ----> UsersComponent 
 *          /shop    ----> ShopComponent
 */

/**
 * Enable routing: 
 * 
 * main.ts file: 
 * 
 * bootstrapApplication(AppComponent, {
     providers: [
        provideRouter([
         {
           path: 'tasks', // <you-domain>/tasks
           component: TasksComponent,
         },
      ]),
    ],
   }).catch((err) => console.error(err));
 */

/**
 * 1. Create a app.route.ts and app.config.ts file to outsource this logic and make main.ts file lean and clean. 
 * 2. If you want to click on a anchor tag and you want to navigate to a diff url, use routerLink directive as below 
 *     <a routerLink="/tasks" > and also make it available to the respective components's ts file ---> config ---> imports []
 * 
 * 3. dynamic route --> few parts of the url is dynamic, not hardcoded.
 * 
 * 4. [routerLink]="'/users/' + user().id" ----> one way 
 *    [routerLink]="['/users/', user().id]" ----> another way, angular handles concatinating 
 */

/**
 * Extract data from dynamic url (getting hold of parameters in the url)
 * 
 * app.config.ts file:
 * 
 * export const appConfig: ApplicationConfig = {
   providers: [
     provideRouter(routes, withComponentInputBinding()),
   ],
 }
   1. Use: withComponentInputBinding() ---> (enable this)

   2.    {
           path: 'users/:userId', // <your-domain>/users/<uid>
           component: UserTasksComponent
         },
   
   3. Now inside userTaskComponent, use either @Input or signals to extract the data, 
      make sure to declare same name property

 */

/**
 * Another way of extracting data using angular's inbuilt service (ActivatedRoute) from @angular/core 
 * 
 * private activatedRoute = inject(ActivatedRoute);
 * 
 * this gives some properties, which hold all the data about the current route, 
 * 
 * in order to console and see, you have to implement your comp class as below 
 * 
 * export class UserTaksComponent implements OnInit {
 * 
 *   ngOnInit(): void {
 *     console.log(this.activatedRoute)
 *   }
 * }
 */

/**
 * 1. For child routes, you only have to give relative path, angular will append with the current parent route
 */

/**
 * 1. Accessing parent route data from inside nested routes
 * 2. Child routes also have access to parent route's dynamic parameters, but with one limitation and workaround for it. 
 * 3. By default, the child routes do not receive those path parameters as input, i.e. input binding won't work by default for child routes
 * 4. child route can get access to paramMap through activatedRoute. 
 * 
 * 5. So by default, a component can only get the path parameters that belong directly to its route through input binding.
 * 
 * 6. If as a child route you want to get the path parameters of a parent route, you explicitly have to tell angular, where you configured
 *    your router and then pass a additional parameter, ----> withRouterConfig(), 
 * 7. This then takes an object, which is used to config router in detailled.
 */

/**
 * 1. For signals, you use computed() 
 * 2. For @Input, you use getter method --> get()
 */

/**
 * 1. console statements can't be kept inside global scope of a class. 
 */

/**
 * Links Shortcuts and programmatic navigation
 * 
 *--> navigate programmatically
    
     private router = inject(Router);

      this.router.navigate(['/users', this.userId(), 'tasks'], {
      below code, after form submitted, this don't allow to go back
      replaceUrl: true,
    })
 */

    /**
     * special routerLink="../", this will take you to one parameter back, 
     * i.e if url is users/u1/addItem, it will take you too users/u1. 
     */

/**
 * activatedRoute property -->snapshot
    // In case if you don't want to subscribe, i.e it's not reactive, 
    // you can get snapshot and use it as a value, 
    // console.log(this.activatedRoute.snapshot);
    // console.log(this.activatedRoute.snapshot.paramMap.get('userId'));
 */


/**
 * @for {
 * } @empty {
 *   <p> Empty </p>
 * }
 */

/**
 * 1. queryParams --> Add query parameters to link, adding query parameters via queryParams property of the 
 *    routerLink directive. 
 * 2. We have two ways to extract query params, one way is when this 'withComponentInputBinding()' is enabled, we can access
 *    query params using input binding. 
 * 3. Other way is by using Observables, activatedRoute, make a subscription using this route obj
 */

/**
 * 1. Route parameters are used to identify a specific resource or endpoint in a URL. 
 *    They are typically used for defining hierarchical or nested resources.
 *    Ex: https://example.com/users/123 where 123 is the user ID.
 * 
 * 2. Query parameters are used to filter, sort, or provide additional information for the request. 
 *    They are used for specifying optional details or modifying the response.
 *    Ex: https://example.com/products?category=books&price_range=10-50
 */
/**
 * 1. Leverage routing for adding static data to routes
 * 2. fetch data for components :
 * 
 * static data: 
 *    {
      path: 'users/:userId', // <your-domain>/users/<uid>
      component: UserTasksComponent,
      children: userRoutes,
      data: {
         // any static data 
         // message: 'Hello' (and then using input binding, access in this comp)
      }
   },

   dynamic data: refer to routing\src\app\users\user-tasks\user-tasks.component.ts, it has all the notes

 */

/**
 * Control route resolver execution: 
 * runGuardsAndResolvers: 'paramsOrQueryParamsChange', property (see app.routes.ts)
 */

/**
 * title: 'HOME' to route 
 * title takes both string or a resolver for dynamic data
 */

/**
 * Route guards: control access to diff routes
 * 
 * canMatch --> modern, versatile 
 * canActivate 
 * canActivateChild or something to allow child routes
 */

/**
 * canDeactivate: It makes sure that unintendent page changes are prevented before they are even initialized. 
 */