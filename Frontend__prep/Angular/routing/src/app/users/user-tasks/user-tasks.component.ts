import {
  Component,
  input,
  inject,
  computed,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})

// we have diff users, angular re-uses this comp, not re-load it, as it is more efficient
// therefore subscription is made
// when need ngOnInit, then class should implements OnInit 
export class UserTasksComponent {
  // reading the url parameter, should be same name
  // userId = input.required<string>();
  userName = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );
  
  // this data fetching is now done by below resolver func
  // ngOnInit(): void {
  //   console.log(this.activatedRoute);
  //   // in case if you don't want to subscribe, i.e it's not reactive,
  //   // you can get snapshot and use it as a value,
  //   // console.log(this.activatedRoute.snapshot);
  //   // console.log(this.activatedRoute.snapshot.paramMap.get('userId'));
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) =>
  //       (this.userName =
  //         this.usersService.users.find((u) => u.id === paramMap.get('userId'))
  //           ?.name || ''),
  //   });

    // whenever comp gets destroyed
    // this.destroyRef.onDestroy(() => subscription.unsubscribe());
  //}
}

//this is the correct signature (arrow functions)
// then only the resolve will accept inside the route file

// Note: snapshot isn't reactive but, this will be called(re-executive) for every navigation/parameter
// changes(i.e variable inside this comp), therefore
// holds the correct data.

// we can do normal way of extracting data inside comp only, but this is also a way 
// to extract data from services and hence we can make our component lead and clean. 
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  // can inject services into resolvers with the help of inject, not with constructor
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};

/**
 * We also have another way to get all the data (static + dynamic) i.e data + resolve related data 
 * using same activatedRoute, this obj has .data property and we can subscribe and extract data as below, 
 * 
 * class ...implements OnInit {
 * 
 *   private activatedRoute = inject(ActivatedRoute); 
 * 
 *  ngOnInit(): void {
 *    this.activatedRoute.data.subscribe({
 *      next: data => {
 *         console.log(data)
 *      }
 *    })
 *  }
 * }
 */

export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
 return resolveUserName(activatedRoute, routerState) + '\'s Tasks'; 
}