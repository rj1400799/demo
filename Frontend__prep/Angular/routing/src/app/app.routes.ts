import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { routes as userRoutes } from './users/users.routes';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  // also return an observable which can then return true or false,
  // or just compute something and retur bool val
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 0.5) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/authorized'));

  //return a bool or RedirectCommand wrapped in an observable.
};

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
    title: 'HOME',
  },
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [dummyCanMatch],
    data: {
      // any static data
      // message: 'Hello' (and then using input binding, access in this comp)
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    // by default this resolver will be executed only when route paramter changes
    // not query param
    // we can change that by adding above runGuardsAndResolvers property
    resolve: {
      // should be valid angular resolvers
      // don't execute, just point to it
      // this will return dynamically resolved data
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  // If no path matches: fallback component (Not-Found)
  {
    path: '**',
    component: NotFoundComponent,
  },
];
