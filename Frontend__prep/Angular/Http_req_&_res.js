/**
 * Connect backend http requests: 
 * 
 * 1. Connect angular client to a backend & database
 * 2. fetch data 
 * 3. sending data 
 * 4. handling loading & error states
 */

/**
 * 1. You dont directly talk to a database inside an angular app. (not secure, client --> conect to db).
 * 2. First connect to a backend api
 * 
 * 3. In order to make http reqs in angular, we have httpClient service, in order for this to work you have to provide a 
 *    provideHttpClient() from @angular/common/http to your main.ts or to a module, if it's module based or to a 
 *    component, if it only uses it. 
 * 4. Then httpclient will be registered applicatiton wide
 * 
 */

/**
 * Providing the httpclient when using NgModules: 
 * 1. Instead of providing the http client via provideHttpClient() passed to bootstrapApplication(), 
 *    you pass it to the providers array of your root NgModule. 
 * 
 * @NgModule({
 *  ....
 *  ....
 *  providers: [provideHttpClient()]
 * })
 */

// export class AvailablePlacesComponent implements OnInit {
//    places = signal<Place[] | undefined>(undefined);
//    private httpClient = inject(HttpClient);
//    private destroyRef = inject(DestroyRef);
 
//    // alternative way to inject
//    // constructor(private httpClient: HttpClient){}
 
//    // this method executes when the component is ready
//    // best place to fetch data
//    ngOnInit() {
//      const subscription = this.httpClient
//        .get<{ places: [Place] }>('http://localhost:3000/places')
//        .subscribe({
//          next: (resData) => {
//            console.log(resData.places);
//          },
//        });
//      // get returns an observable
//      // In the end, get() creates a blueprint for the actual GET request.
//      // You need to subscribe to then trigger the request.
 
//      // subscribe takes such an observer object, where you can define diff functions
//      // for diff scenarios, for ex: the next function to handle the next emitted value
 
//      // from this http observers, note that they will only emite one value (response data)
//      // you can configure though, by get an config obj to .get('url', {..})
 
//      // although this only emite one value, it's better to unsubribe too.
 
//      // technically not required but it's a good idea
//      this.destroyRef.onDestroy(() => {
//        subscription.unsubscribe();
//      });
//    }
//  }


/**
 * We can inject services into another service. 
 */

/**
 * 1. Have, all http configurations inside a service and then subscribe inside your comp, 
 *    you can destroySub, because the service injection doesn't know when the comp is removed. 
 * 2. Because .get() returns an observable, you have to subscribe to it. 
 */


// In RxJS, tap is an operator that allows you to perform side effects for notifications from an 
// observable, without affecting the emissions themselves. It is often used for debugging purposes, 
// logging, or triggering actions that should not alter the stream's data.

/**
 * You can handle an error when sent a req from a diff comp and then where you wanna handle it. 
 * 
 * ex: u sent a req from a comp, it lead to error, you now have a error service, inject it 
 *     and have a signal and output error modal if needed.
 */

/**
 * Interceptors --> It's a special function which is executed whenever a request is about to sent 
 *                  or response just arrived.
 * 
 */
// import {
//    HttpHandlerFn,
//    HttpRequest,
//    provideHttpClient,
//    withInterceptors,
//  } from '@angular/common/http';
 
//  function loggingInterceptor(
//    request: HttpRequest<unknown>,
//    next: HttpHandlerFn
//  ) {
//    console.log('Outgoing request', request);
//    return next(request);
//  }
//  bootstrapApplication(AppComponent, {
//    providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
//  }).catch((err) => console.error(err));

/**
 * Use tap inside pipe, to define your own observer
 */