import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  interval = signal(0);
  doubleInterval = computed(() => this.interval() * 2); // inside this arrow func is an expression, i.e can lead to a final value.
  private destroyRef = inject(DestroyRef);

  // Signal to Observable
  // pass signal without calling i.e no '()'
  clickCount$ = toObservable(this.clickCount);

  // observables to signals
  interval$ = interval(1000); // here i didn't subscribe, therefore it won't emit any value
  intervalSignal = toSignal(this.interval$, { initialValue: 0 }); // here you converted observable to signal, i.e listening to emitted values
  // now just like signals, you can listen using effect() inside constructor, compute.

  // creating custom observables
  customInterval$ = new Observable((subscriber) => {
    let timeExecuted = 0;
    const interval = setInterval(() => {
      // subscriber.error (define what to happen if any failure)
      if (timeExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value');
      subscriber.next({ message: 'New value' });
      timeExecuted++;
    }, 1000);
  });

  constructor() {
    // triggers whenever a signal changes.
    // explore this effect()
    effect(() => {
      console.log(`Clicked button ${this.clickCount} times.`);
    });
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.interval.update(prevIntervalNumber => prevIntervalNumber + 1);
    // },1000);
    // // in order to listen to emitted values and use them, you have to subscribe
    // // rxjs internally see's, if there's no one interested to know these emitted values
    // // then it's no use of emitting values, therefore one has to subscribe to it.
    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     // this subscribe method takes a so-called observer object, which is an object
    //     // that can implement up to three methods.

    //     // this next func is executed for every emitted value
    //     next: (val) => console.log(val),
    //     // complete: () =>
    //     // error: () =>
    //   });

    // // It's a good practice to unsubscribe because when it's not needed, to make sure that there's no memory leakage
    // // and there's no ongoing observable behind the scenes.
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    // customer observable usable:
    this.customInterval$.subscribe({
      next: (val) => console.log('custom : ', val),
      complete: () => console.log('completed'),
    });

    // listening to signals with the help of an observable
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${this.clickCount} times.`),
    });
  }

  // this console also looks like a stream of data, especially like a stream of data that
  // could have been produced with help of a subject, since we are essentially emitting new values
  // by calling update ourselves, then what's the difference compared to an observable then?
  // and where are some similarities

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
