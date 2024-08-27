import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';

function loggingInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  console.log('Outgoing request', request);
  // can't mutate the actual req, but you can clone it,
  // you can change the body or headers
  // const req = request.clone({
  //   headers: request.headers.set('X-DEBUG', 'TESTING'),
  // }); and pass this req to next

  // here next is an observable
  return next(request).pipe(
    tap({
      next: event => {
        if(event.type === HttpEventType.Response){
          // this above HttpEventType also has sent property, which can be used to do 
          // some stuff after req is sent
          // here we dealing with Response 
          console.log('[Incoming Response'); 
          console.log(event.status);  // response status
          console.log(event.body); // response body
        }
      }
    })
  )
}

/**
 * HTTP Response Interceptors: 
 * 1. You also need a http req interceptors, because it's then the result of calling next
 *    down here, which will allow you to also intercept responses and act on responses.
 * 2. Because next will give you an observable that's wrapped around an HTTP event type of value 
 *    And therefore you can call pipe here since it's an observable to change it or to tap 
 *    into it, we don't wanna subscribe here because that would be the end of this observable chain
 *    and othe parts in the applcation now wouldn't be able to interact with that response 
 *    anywhere. So pipe it instead
 */
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));
