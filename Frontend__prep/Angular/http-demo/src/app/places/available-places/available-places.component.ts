import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
  providers: [],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private placesService = inject(PlacesService);

  private destroyRef = inject(DestroyRef);

  // alternative way to inject
  // constructor(private httpClient: HttpClient){}

  // this method executes when the component is ready
  // best place to fetch data
  ngOnInit() {
    const subscription = this.placesService
      .loadAvailablePlaces()
      // below all are observalble functions
      .subscribe({
        // we had response, if we add an observe config to get method,
        // if we didn't do it, we still can get that data, but not in form of
        // HttpResponse, it has headers, status code, statusText, etc..
        next: (places) => {
          // console.log(response.body?.places);
          this.places.set(places);
        },
        error: (error: Error) => {
          console.log(error);
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });
    // get returns an observable
    // In the end, get() creates a blueprint for the actual GET request.
    // You need to subscribe to then trigger the request.

    // subscribe takes such an observer object, where you can define diff functions
    // for diff scenarios, for ex: the next function to handle the next emitted value

    // from this http observers, note that they will only emite one value (response data)
    // you can configure though, by get an config obj to .get('url', {..})

    // although this only emite one value, it's better to unsubribe too.

    // observe: 'event' --> if you want to perform diff actions at diff time during
    // your req/res lifecycle, you can use events. it is triggered multiple times.
    // ex: if you give events as observe above, it will trigger twice,
    // first --> when req is sent(we get info that req is sent.)
    // second when we received data from server.

    // technically not required but it's a good idea
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(selectPlace: Place) {
    // here inside put, you can set the outgoing req body, it can be {} or [],
    // angular will convert this data to JSON format and sent it to the server.
    const subscription = this.placesService
      .addPlaceToUserPlaces(selectPlace)
      .subscribe({
        next: (resData) => console.log(resData),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
