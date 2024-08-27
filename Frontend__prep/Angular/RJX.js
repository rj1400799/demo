/**
 * RJX & Observables --> working with stream of data 
 * 
 * 1. What are observables? 
 * 2. Creating & Using observables 
 * 3. Observable operators 
 * 4. Observables vs Signals
 * 
 * Definition: An Observable is a core concept from the RxJS library. It represents a stream of data that you can subscribe to. 
 *             Observables can emit multiple values over time and provide a way to handle asynchronous operations and events.

   Usage: In Angular, observables are commonly used for handling HTTP requests, user input events, and other asynchronous data streams. 
       For example, the HttpClient service in Angular returns observables when making HTTP requests.

 * 
 */

/**
 * What are observables: 
 * 
 * 1. Introduced by RxJs, an object that produces and controls a stream of data, you could say.
 * 
 * 2. Subjects like BehaviourSubject from rxjs is like an observable because with them you're creating and 
 *    controlling a stream of data to which you can then listen in another part of your app.
 * 
 * 3. But subjects are just one way of creating observables. These are special observables that act as event emitters,
 *    to be precise.
 */

/**
 * 1. You also have operators in RxJs, so that you can operate the data which is coming from the stream. 
 */

/**
 * 1. In observables, we have also have operators, where the stream of data can be modified using operators like map()
 * 2. But in signals, we don't have
 */

/**
 * Signals vs observables
 * 
 * 1. Signals are new feature in angular, therefore for sharing data across the app, we use rxjs and subscribe to this observables
 * 2. With signals, you don't need RxJs. 
 * 3. Source that produces data like an interval 
 * 
 * 4. Signals have an initial value but observables don't, but there's a special case, subjects being observabels can have initial
 *    value. Observables has an initial value of undefined.
 */

/**
 * 1. Observales are values over time. It's a pipeline of values that are emitted over time. 
 * 
 * 2. Whereas signals are value containers. 
 *    (you can read the value at any time, without setting up a subscription)
 */

/**
 * Use cases: 
 * 1. Observables are great for managing events & streamed data (where values do arrive asynchronously over time). 
 * 
 * 2. Signals are great for managing application state (data which is set to initial values and which may change over time
 *    and where those changes should then be reflected in the UI).
 * 
 * 3. Therefore based on use case, choose either a subject, observable or a signal. 
 * 
 * 4. In angular, we have tools to convert these from one to another (i.e observable to a signal, vice-versa)
 */

/**
 * 1. Convert Signal to observable (you can listen to signals using observables) without effect() inside a constructor.
 * 2. Can also convert observable to signal using toSignal, this takes second arg a obj, which has many properties, like 
 *    initialValue and manageCleanUp
 * 3. Nice thing about 'toSignal' --> it will also clean up the observable subscription when it's removed. 
 *    You can also setup manual clean up, by config the second arg object and set manualCleanup to true.
 * 
 */

/**
 * RxJs may be ignored or deprecated, although you should be aware of what are observables, subjects, signals
 */

/**
 * 1. Signals are for managing values.
 * 
 * 2. Observables are for managing events or values that are emitted by some data source over time (async)
 * 
 * 3. Operators are helpful for managing that data that is emitted from a observable, like map()
 */