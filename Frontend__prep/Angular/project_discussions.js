// Structure my angular app, I'm using version-17, it's better to use angular standalone components or module based approach for this requirement, i will give you my layout details 

// 1. <domain-name>/ [if use is logged in, it should navigate to <domain-name>/dashboard or else login page should be shown. 
// 2. In <domain-name>/home, i have two main components, 
//    a. one is header, it has home button (to the left), inventory, whishlist, cart, profile (to the right of header). 
//    b. Second component is dashboard component, here products should be listed and above it, it should have a filter component (search, filter by date, type etc). 
// 3. Clicking on each item should take me to <domain-name>/product/:id and render only header component and product component. 
// 4. clicking on any component in the header, should take me to <domain-name>/inventory, <domain-name>/whishlist, <domain-name>/profile, <domain-name>/cart. 

// The idea is I want to create a marketplace for my company, where employees can sell, buy, trade their products internally, with these requirements and above layout, give me the routing config, best folder structure, where components, pages, services, route configs, resolvers, etc can have. 
// ChatGPT
// Based on your requirements for an Angular application with version 17, I'll outline a recommended folder structure, routing configuration, and a brief overview of where different parts of your app should reside.

// Recommended Folder Structure
// plaintext
// Copy code
// src/
// |-- app/
// |   |-- core/
// |   |   |-- services/
// |   |   |   |-- auth.service.ts
// |   |   |   |-- product.service.ts
// |   |   |   |-- user.service.ts
// |   |   |-- interceptors/
// |   |   |   |-- auth.interceptor.ts
// |   |   |-- guards/
// |   |   |   |-- auth.guard.ts
// |   |   |-- models/
// |   |   |   |-- user.model.ts
// |   |   |   |-- product.model.ts
// |   |   |-- resolvers/
// |   |   |   |-- product.resolver.ts
// |   |   |-- core.module.ts
// |   |-- shared/
// |   |   |-- components/
// |   |   |   |-- header/
// |   |   |   |   |-- header.component.ts
// |   |   |   |   |-- header.component.html
// |   |   |   |-- filter/
// |   |   |   |   |-- filter.component.ts
// |   |   |   |   |-- filter.component.html
// |   |   |-- directives/
// |   |   |-- pipes/
// |   |   |-- shared.module.ts
// |   |-- pages/
// |   |   |-- home/
// |   |   |   |-- dashboard/
// |   |   |   |   |-- dashboard.component.ts
// |   |   |   |   |-- dashboard.component.html
// |   |   |-- product/
// |   |   |   |-- product.component.ts
// |   |   |   |-- product.component.html
// |   |   |-- inventory/
// |   |   |   |-- inventory.component.ts
// |   |   |   |-- inventory.component.html
// |   |   |-- wishlist/
// |   |   |   |-- wishlist.component.ts
// |   |   |   |-- wishlist.component.html
// |   |   |-- cart/
// |   |   |   |-- cart.component.ts
// |   |   |   |-- cart.component.html
// |   |   |-- profile/
// |   |   |   |-- profile.component.ts
// |   |   |   |-- profile.component.html
// |   |   |-- auth/
// |   |   |   |-- login/
// |   |   |   |   |-- login.component.ts
// |   |   |   |   |-- login.component.html
// |   |   |   |-- auth.module.ts
// |   |-- app-routing.module.ts
// |   |-- app.component.ts
// |   |-- app.component.html
// |   |-- app.module.ts
// |-- assets/
// |-- environments/
// |-- index.html
// |-- main.ts
// |-- styles.css
// Routing Configuration
// Here is how you can configure routing based on your requirements. This assumes you're using Angular's Router module.

// typescript
// Copy code
// // src/app/app-routing.module.ts
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth.guard';
// import { LoginComponent } from './pages/auth/login/login.component';
// import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
// import { ProductComponent } from './pages/product/product.component';
// import { InventoryComponent } from './pages/inventory/inventory.component';
// import { WishlistComponent } from './pages/wishlist/wishlist.component';
// import { CartComponent } from './pages/cart/cart.component';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { ProductResolver } from './core/resolvers/product.resolver';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { 
//     path: 'home', 
//     component: DashboardComponent, 
//     canActivate: [AuthGuard], 
//     children: [
//       { path: '', component: DashboardComponent }
//     ]
//   },
//   { path: 'product/:id', component: ProductComponent, resolve: { product: ProductResolver } },
//   { path: 'inventory', component: InventoryComponent },
//   { path: 'wishlist', component: WishlistComponent },
//   { path: 'cart', component: CartComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '**', redirectTo: 'home' }  // Fallback route
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// Core Module and Services
// Core Module:

// Contains services that should be provided application-wide.
// Configures interceptors and guards.
// Services:

// auth.service.ts - Handles authentication logic.
// product.service.ts - Manages product-related API calls.
// user.service.ts - Manages user profile-related API calls.
// Guards:

// auth.guard.ts - Checks if the user is authenticated and redirects accordingly.
// Resolvers:

// product.resolver.ts - Fetches product data before the route is activated.
// Shared Module and Components
// Shared Module:

// Houses reusable components, directives, and pipes.
// Import it into other modules to reuse these shared functionalities.
// Components:

// header.component.ts - The header containing navigation links.
// filter.component.ts - A component for filtering products in the dashboard.
// Pages Module
// Pages Module:

// Contains feature modules for different sections/pages of your app.
// You can have a separate module for home, auth, product, inventory, wishlist, cart, and profile if needed.
// Example for Dashboard Component:

// typescript
// Copy code
// // src/app/pages/home/dashboard/dashboard.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   // Component logic here
// }
// Example for Product Component:

// typescript
// Copy code
// // src/app/pages/product/product.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent implements OnInit {
//   product: any; // Define type based on your product model

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.route.data.subscribe(data => {
//       this.product = data['product'];
//     });
//   }
// }
// This structure and configuration should provide a solid foundation for your Angular app while allowing for scalability and maintainability. Feel free to adjust based on specific needs or preferences!

// give me all the components ts and html file also, some basic one;s
// ChatGPT
// Certainly! Here are basic implementations for the TypeScript and HTML files for the components you described. For simplicity, I'll include essential parts to get you started. You can expand these according to your app's requirements.

// 1. Header Component
// header.component.ts

// typescript
// Copy code
// // src/app/shared/components/header/header.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   // Add any necessary properties or methods
// }
// header.component.html

// html
// Copy code
// <!-- src/app/shared/components/header/header.component.html -->
// <header>
//   <div class="header-left">
//     <a routerLink="/home">Home</a>
//   </div>
//   <div class="header-right">
//     <a routerLink="/inventory">Inventory</a>
//     <a routerLink="/wishlist">Wishlist</a>
//     <a routerLink="/cart">Cart</a>
//     <a routerLink="/profile">Profile</a>
//   </div>
// </header>
// 2. Filter Component
// filter.component.ts

// typescript
// Copy code
// // src/app/shared/components/filter/filter.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-filter',
//   templateUrl: './filter.component.html',
//   styleUrls: ['./filter.component.css']
// })
// export class FilterComponent {
//   // Add filter properties and methods here
// }
// filter.component.html

// html
// Copy code
// <!-- src/app/shared/components/filter/filter.component.html -->
// <div class="filter-container">
//   <input type="text" placeholder="Search..." />
//   <button>Search</button>
//   <label for="date-filter">Filter by date:</label>
//   <input type="date" id="date-filter" />
//   <label for="type-filter">Filter by type:</label>
//   <select id="type-filter">
//     <option value="">All</option>
//     <option value="type1">Type 1</option>
//     <option value="type2">Type 2</option>
//   </select>
// </div>
// 3. Dashboard Component
// dashboard.component.ts

// typescript
// Copy code
// // src/app/pages/home/dashboard/dashboard.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   // Sample data, replace with actual data or API call
//   products = [
//     { id: 1, name: 'Product 1', description: 'Description 1' },
//     { id: 2, name: 'Product 2', description: 'Description 2' }
//   ];

//   // Add methods to handle product filtering or other logic
// }
// dashboard.component.html

// html
// Copy code
// <!-- src/app/pages/home/dashboard/dashboard.component.html -->
// <div>
//   <app-filter></app-filter>
//   <div class="product-list">
//     <div *ngFor="let product of products">
//       <h3>{{ product.name }}</h3>
//       <p>{{ product.description }}</p>
//       <a [routerLink]="['/product', product.id]">View Details</a>
//     </div>
//   </div>
// </div>
// 4. Product Component
// product.component.ts

// typescript
// Copy code
// // src/app/pages/product/product.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent implements OnInit {
//   product: any; // Define type based on your product model

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.route.data.subscribe(data => {
//       this.product = data['product'];
//     });
//   }
// }
// product.component.html

// html
// Copy code
// <!-- src/app/pages/product/product.component.html -->
// <div *ngIf="product">
//   <h1>{{ product.name }}</h1>
//   <p>{{ product.description }}</p>
//   <!-- Add more product details here -->
// </div>
// 5. Inventory Component
// inventory.component.ts

// typescript
// Copy code
// // src/app/pages/inventory/inventory.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-inventory',
//   templateUrl: './inventory.component.html',
//   styleUrls: ['./inventory.component.css']
// })
// export class InventoryComponent {
//   // Add properties or methods as needed
// }
// inventory.component.html

// html
// Copy code
// <!-- src/app/pages/inventory/inventory.component.html -->
// <h2>Inventory</h2>
// <!-- Add content for the inventory page here -->
// 6. Wishlist Component
// wishlist.component.ts

// typescript
// Copy code
// // src/app/pages/wishlist/wishlist.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-wishlist',
//   templateUrl: './wishlist.component.html',
//   styleUrls: ['./wishlist.component.css']
// })
// export class WishlistComponent {
//   // Add properties or methods as needed
// }
// wishlist.component.html

// html
// Copy code
// <!-- src/app/pages/wishlist/wishlist.component.html -->
// <h2>Wishlist</h2>
// <!-- Add content for the wishlist page here -->
// 7. Cart Component
// cart.component.ts

// typescript
// Copy code
// // src/app/pages/cart/cart.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {
//   // Add properties or methods as needed
// }
// cart.component.html

// html
// Copy code
// <!-- src/app/pages/cart/cart.component.html -->
// <h2>Cart</h2>
// <!-- Add content for the cart page here -->
// 8. Profile Component
// profile.component.ts

// typescript
// Copy code
// // src/app/pages/profile/profile.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent {
//   // Add properties or methods as needed
// }
// profile.component.html

// html
// Copy code
// <!-- src/app/pages/profile/profile.component.html -->
// <h2>Profile</h2>
// <!-- Add content for the profile page here -->
// 9. Login Component
// login.component.ts

// typescript
// Copy code
// // src/app/pages/auth/login/login.component.ts
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   constructor(private router: Router) {}

//   login() {
//     // Implement login logic
//     this.router.navigate(['/home']);
//   }
// }
// login.component.html

// html
// Copy code
// <!-- src/app/pages/auth/login/login.component.html -->
// <h2>Login</h2>
// <form (ngSubmit)="login()">
//   <div>
//     <label for="username">Username:</label>
//     <input type="text" id="username" name="username" required />
//   </div>
//   <div>
//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password" required />
//   </div>
//   <button type="submit">Login</button>
// </form>
// CSS Files (Basic)
// For each component, you can add basic styling in their respective CSS files. Here is an example for the header.component.css:

// header.component.css

// css
// Copy code
// /* src/app/shared/components/header/header.component.css */
// header {
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
//   background-color: #333;
//   color: white;
// }

// .header-left a,
// .header-right a {
//   color: white;
//   text-decoration: none;
//   margin: 0 10px;
// }
// Feel free to customize the styling and add more functionality as needed!

// header component should be fixed and be present inside every component
// ChatGPT
// If you want the HeaderComponent to be fixed at the top of every page in your Angular application, you should include it in a layout component that acts as a wrapper for your page content. This layout component will handle the fixed positioning of the header and ensure that it is present across all views.

// Here’s how you can structure this:

// 1. Layout Component
// Create a LayoutComponent that includes the HeaderComponent and a <router-outlet> for rendering page content.

// layout.component.ts

// typescript
// Copy code
// // src/app/shared/components/layout/layout.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-layout',
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.css']
// })
// export class LayoutComponent {
//   // Any shared logic or properties for the layout can go here
// }
// layout.component.html

// html
// Copy code
// <!-- src/app/shared/components/layout/layout.component.html -->
// <app-header></app-header>
// <main>
//   <router-outlet></router-outlet>
// </main>
// layout.component.css

// css
// Copy code
// /* src/app/shared/components/layout/layout.component.css */
// header {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 1000;
// }

// main {
//   margin-top: 60px; /* Adjust based on the height of your header */
// }
// 2. Update Routing Configuration
// You need to use the LayoutComponent in your routing configuration so that it wraps around your routed components.

// app-routing.module.ts

// typescript
// Copy code
// // src/app/app-routing.module.ts
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth.guard';
// import { LoginComponent } from './pages/auth/login/login.component';
// import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
// import { ProductComponent } from './pages/product/product.component';
// import { InventoryComponent } from './pages/inventory/inventory.component';
// import { WishlistComponent } from './pages/wishlist/wishlist.component';
// import { CartComponent } from './pages/cart/cart.component';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { ProductResolver } from './core/resolvers/product.resolver';
// import { LayoutComponent } from './shared/components/layout/layout.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { 
//     path: '', 
//     component: LayoutComponent,
//     canActivate: [AuthGuard],
//     children: [
//       { path: 'home', component: DashboardComponent },
//       { path: 'product/:id', component: ProductComponent, resolve: { product: ProductResolver } },
//       { path: 'inventory', component: InventoryComponent },
//       { path: 'wishlist', component: WishlistComponent },
//       { path: 'cart', component: CartComponent },
//       { path: 'profile', component: ProfileComponent },
//     ]
//   },
//   { path: 'login', component: LoginComponent },
//   { path: '**', redirectTo: 'home' }  // Fallback route
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// // 3. Update the App Module
// // Ensure the LayoutComponent is declared and included in the AppModule.

// // app.module.ts

// // typescript
// // Copy code
// // src/app/app.module.ts
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LayoutComponent } from './shared/components/layout/layout.component';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
// import { ProductComponent } from './pages/product/product.component';
// import { InventoryComponent } from './pages/inventory/inventory.component';
// import { WishlistComponent } from './pages/wishlist/wishlist.component';
// import { CartComponent } from './pages/cart/cart.component';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { LoginComponent } from './pages/auth/login/login.component';
// import { FilterComponent } from './shared/components/filter/filter.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LayoutComponent,
//     HeaderComponent,
//     DashboardComponent,
//     ProductComponent,
//     InventoryComponent,
//     WishlistComponent,
//     CartComponent,
//     ProfileComponent,
//     LoginComponent,
//     FilterComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// // Summary
// // Layout Component: Includes the HeaderComponent and a <router-outlet> to render the routed views.
// // Routing Configuration: Wraps all routes with the LayoutComponent so the header is present across all pages.
// // CSS for Layout: Ensures the header is fixed at the top and adjusts the content to account for the header's height.
// // With this setup, the HeaderComponent will always be visible at the top of the page, and the main content of your application will be displayed below it.

// // give me  implementation for auth, authorization and JWT
// // ChatGPT
// // To implement authentication, authorization, and JWT handling in an Angular application, you'll need to cover several aspects:

// // Authentication Service: Handles user login, logout, and storing JWT.
// // Auth Interceptor: Attaches the JWT to outgoing HTTP requests.
// // Auth Guard: Protects routes that require authentication.
// // Login Component: Handles user login.
// // JWT Token Handling: Manages token storage and retrieval.
// // Here’s a step-by-step guide to setting up these components:

// // 1. Authentication Service
// // This service will handle login, logout, and JWT storage.

// // auth.service.ts

// // typescript
// // Copy code
// // src/app/core/services/auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'https://your-api-domain.com/api'; // Replace with your API URL
//   private authSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

//   constructor(private http: HttpClient) {}

//   get isAuthenticated$(): Observable<boolean> {
//     return this.authSubject.asObservable();
//   }

//   login(username: string, password: string): Observable<boolean> {
//     return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password })
//       .pipe(
//         map(response => {
//           this.storeToken(response.token);
//           this.authSubject.next(true);
//           return true;
//         }),
//         catchError(() => {
//           this.authSubject.next(false);
//           return [false];
//         })
//       );
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//     this.authSubject.next(false);
//   }

//   private storeToken(token: string): void {
//     localStorage.setItem('token', token);
//   }

//   private getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   private isAuthenticated(): boolean {
//     return !!this.getToken();
//   }
// }
// 2. Auth Interceptor
// This interceptor will add the JWT to every outgoing HTTP request.

// auth.interceptor.ts

// typescript
// Copy code
// // src/app/core/interceptors/auth.interceptor.ts
// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = this.authService.getToken();

//     if (token) {
//       const clonedReq = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return next.handle(clonedReq);
//     }

//     return next.handle(req);
//   }
// }
// 3. Auth Guard
// This guard will protect routes that require authentication.

// auth.guard.ts

// typescript
// Copy code
// // src/app/core/guards/auth.guard.ts
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.authService.isAuthenticated$) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
// 4. Login Component
// This component will handle user login and use the AuthService.

// login.component.ts

// typescript
// Copy code
// // src/app/pages/auth/login/login.component.ts
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../../../core/services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   error: string | null = null;

//   constructor(private authService: AuthService, private router: Router) {}

//   login(): void {
//     this.authService.login(this.username, this.password).subscribe(success => {
//       if (success) {
//         this.router.navigate(['/home']);
//       } else {
//         this.error = 'Login failed. Please try again.';
//       }
//     });
//   }
// }
// login.component.html

// html
// Copy code
// <!-- src/app/pages/auth/login/login.component.html -->
// <h2>Login</h2>
// <form (ngSubmit)="login()">
//   <div>
//     <label for="username">Username:</label>
//     <input type="text" id="username" [(ngModel)]="username" name="username" required />
//   </div>
//   <div>
//     <label for="password">Password:</label>
//     <input type="password" id="password" [(ngModel)]="password" name="password" required />
//   </div>
//   <button type="submit">Login</button>
//   <div *ngIf="error" class="error">{{ error }}</div>
// </form>
// 5. Update App Module
// Ensure that the AuthInterceptor is provided in the AppModule and configure your HTTP interceptors.

// app.module.ts

// typescript
// Copy code
// // src/app/app.module.ts
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LayoutComponent } from './shared/components/layout/layout.component';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
// import { ProductComponent } from './pages/product/product.component';
// import { InventoryComponent } from './pages/inventory/inventory.component';
// import { WishlistComponent } from './pages/wishlist/wishlist.component';
// import { CartComponent } from './pages/cart/cart.component';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { LoginComponent } from './pages/auth/login/login.component';
// import { FilterComponent } from './shared/components/filter/filter.component';
// import { AuthInterceptor } from './core/interceptors/auth.interceptor';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LayoutComponent,
//     HeaderComponent,
//     DashboardComponent,
//     ProductComponent,
//     InventoryComponent,
//     WishlistComponent,
//     CartComponent,
//     ProfileComponent,
//     LoginComponent,
//     FilterComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule
//   ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// Summary
// Authentication Service (auth.service.ts): Manages user authentication and JWT storage.
// Auth Interceptor (auth.interceptor.ts): Attaches the JWT to HTTP requests.
// Auth Guard (auth.guard.ts): Protects routes that require authentication.
// Login Component (login.component.ts): Handles user login.
// With these implementations, you have a basic setup for handling authentication, authorization, and JWT management in your Angular application. Ensure you replace placeholder URLs and adjust error handling as needed for your specific use case.


// src/
// │
// ├── app/
// │   ├── core/
// │   │   ├── guards/
// │   │   │   └── auth-check.guard.ts
// │   │   ├── interceptors/
// │   │   │   └── auth.interceptor.ts
// │   │   ├── services/
// │   │   │   └── auth.service.ts
// │   │   ├── models/
// │   │   │   └── product.model.ts
// │   │   └── constants/
// │   │       ├── app.constants.ts
// │   │       └── api.constants.ts
// │   │
// │   ├── pages/
// │   │   ├── auth/
// │   │   │   ├── login/
// │   │   │   │   ├── login.component.ts
// │   │   │   │   ├── login.component.html
// │   │   │   │   └── login.component.css
// │   │   │   └── register/
// │   │   │       ├── register.component.ts
// │   │   │       ├── register.component.html
// │   │   │       └── register.component.css
// │   │   ├── home/
// │   │   │   └── dashboard/
// │   │   │       ├── dashboard.component.ts
// │   │   │       ├── dashboard.component.html
// │   │   │       └── dashboard.component.css
// │   │   ├── product/
// │   │   │   └── product.component.ts
// │   │   │       ├── product.component.html
// │   │   │       └── product.component.css
// │   │   ├── inventory/
// │   │   │   └── inventory.component.ts
// │   │   │       ├── inventory.component.html
// │   │   │       └── inventory.component.css
// │   │   ├── wishlist/
// │   │   │   └── wishlist.component.ts
// │   │   │       ├── wishlist.component.html
// │   │   │       └── wishlist.component.css
// │   │   ├── cart/
// │   │   │   └── cart.component.ts
// │   │   │       ├── cart.component.html
// │   │   │       └── cart.component.css
// │   │   └── profile/
// │   │       └── profile.component.ts
// │   │       ├── profile.component.html
// │   │       └── profile.component.css
// │   │
// │   ├── shared/
// │   │   ├── components/
// │   │   │   ├── header/
// │   │   │   │   ├── header.component.ts
// │   │   │   │   ├── header.component.html
// │   │   │   │   └── header.component.css
// │   │   │   ├── filter/
// │   │   │   │   ├── filter.component.ts
// │   │   │   │   ├── filter.component.html
// │   │   │   │   └── filter.component.css
// │   │   │   └── layout/
// │   │   │       ├── layout.component.ts
// │   │   │       ├── layout.component.html
// │   │   │       └── layout.component.css
// │   │
// │   ├── app.component.ts
// │   ├── app.component.html
// │   ├── app.component.css
// │   ├── app-routing.ts
// │   └── main.ts
// │
// ├── assets/
// │   └── (static assets like images, fonts, etc.)
// │
// ├── environments/
// │   ├── environment.ts
// │   └── environment.prod.ts
// │
// └── index.html
