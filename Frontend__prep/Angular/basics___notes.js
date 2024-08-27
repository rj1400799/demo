/**
 * Angular: Js framework, collections of packages and rules. 
 * 
 * 1. Collection of tools & features (CLI, debugging tools, IDE plugins).
 * 
 * Why angular? 
 * 1. Why framework? can be used for complex, it simplifies the complex UI interfaces
 * 2. Write declarative code in angular, where as for normal vanilla js projects, it's 
 *    imperative code, means (step by step instructions that tells the browser what to do).
 * 3. Separation of concerns, component based
 * 4. Object-orientated programming concepts & priniciples (dependency injection, class), angular gives tools to simply these.
 * 5. Angular uses typescript. (without this you can see errors in app's runtime, which can be costly).
 * 
 * 6. cmnd - npm i -g @angular/cli
 * 
 * 7. ng is available after cli is installed. 
 * 
 * 8. Install -> Angular Lanaguage Service vscode extension.
 * 9. Angular essentials extension
 */

/**
 * Essentials: 
 * 1. Components
 * 2. Structure of project 
 * 3. Handling user events 
 * 4. Rendering & Updating dynamic UI Content
 */

/**
 * 1. main.ts --> Is the first file which will be executed when your visitor visits your page.
 * 
 * 2. In index.html, you don't see any script imports, you will only see a <app-root> element, when page loads,
 *    angular CLI injects the script file (main.ts), converted to js by cli and then be executed.
 * 
 * 3. When importing something from a ts file, you should not write "./someFile.ts", omit .ts
 * 
 * 4. @Component, this is a decorative, which is imported from angular core, here we give some properties, which will
 *    then be converted to a component --> markup, this then will be replaced by the selector mentioned in the index.html.
 *    Angular uses typescript, this is an common example.
 * 
 * 5. Components in angular are classes that are enhanced by it's decorator. 
 * 
 * 6. when giving a config obj to a decorator, it's selector has to be two words (selector: 'app-header') separeted with'-'
 *    because in html, we have some default selectors, to make sure it doesnt override/ collide.
 * 
 * 7. (decorator config object has this standalone property) Angular now uses standalone components which are easy to 
 *    use and tie together, previously it uses module based components,which we can explore later on. 
 * 
 * 8. Whenever you have created a new component, and you want your index.html to render it, you have to import
 *    in main.ts and pass it to bootstrapApplication func, but its not the way we do things in component based apps.
 * 
 * 9. Instead, you have main app component, you have to import in app.comp.ts and then add inside imports []
 * 
 * 10. You have styles, styleUrl, styleUrls[]
 * 
 * 11. .gitkeep inside assests folder??
 * 
 * 12. Make changes in angular.json file for assests, inside architect property
 * 
 * 13. Create a new component using CLI --> ng generate component path
 *     ex: ng g c user, it creates a component user inside src/app/user
 * 
 * 14. The assests/ asset path must start with the project source root. 
 *     i.e. assets to be inside src (it was app before, cross check please)
 * 
 * 15. In order to have dynamic content in you markup template, you have to create variables inside that class,
 *     you don't need keywords like (let, const, var), and then inside markup, use string interpolation (i.e. two {{}})
 * 
 * 16. Property binding ex: 
 *    <img
         [src]="'assets/users/' + selectedUser.avatar"
         [alt]="selectedUser.name"
      />
   
   17. Event listeners, you have to use --> (click)

   18. DOM manipulation with respect to user interactions is done by angulars core package --> zone.js
       explore: angular/packages/zone.js

   19. Zone.js notifies Angular about user events, expired timers etc.

   20. There are two approaches for updating state in angular,
       a. Relying on Zone.js & angular's change detection mechanism. (Works automatically, no special instructions required)
          Supported since Angular 2 
       b. Signals: Using Signals to notify angular about value changes & required UI updates. (Required usage of special 
          "signal" instructions & code), supported since Angular 16. 
   
   21. Signals are trackable data containers, A signal is an object that stores a value(any type of value, including nested
        objects). Angular manages subscriptions to the signal to get notified about value changes. When a change occurs, 
        angular is then able to update the part of the UI that needs updating.

   22. (Not accurated, refer to docs) In case of Zone.js, it creates a bunch of zones and listens to all possible events/timers/etc.. that could lead to
       change in the UI, if an event occured, it goes to that zone and identifies the respective changed values and notifies
       angular to update it.
   
   23. Zone.js is a library that creates zones to manage and intercept asynchronous tasks like events and timers. 
       When these tasks complete or events occur, Zone.js identifies changes in the execution context and notifies 
       Angular (or another framework), prompting UI updates based on the modified application state.
   
   24. With signals angular can get rid of Zone.js and perform change detection in an efficient manner and update UI.

   25. Became stable in v17.

   26.     <li>
             <app-user
             [avatar]="users[0].avatar"
             [name]="users[1].name"
              id="0"
             (select)="onSelectUser($event)"
            />

            here $event variable is not just available when working with custom events. It can also be used
            on built-in events (like 'click') to get hold of potentially emitted values.

    27. In Angular, the syntax (event)="expression" is used for event binding. This means that when the specified event occurs, 
        Angular executes the expression provided.

    28. Property binding --> <div>{{ title }}</div> & [id]="users[2].id"

    29. skip tests when creating comp using CLI ng g c tasks --skip-tests

    30. string interpolation ---> {{user}}

    31. We use Typescript, which enforces devs to know which type of data is going where.
    
    // template feature (version 18), but 17 is also available
    32. @for loop must have a "track" expression, @for (user of users; track user.id){ ..} 
        angular needs to track, in order to update items, also when users array changes, it has ids, so no
        need to render some if it's already present
    33. @if{}
    34. @else{}

    //structural directives (to enhance elements) (older versions)
    35. <li *ngFor="let user of users"> 
    these has to be unlocked, we have to  import { NgFor } from '@angular/common';
    and include in import inside @Component decorator's config

    36. ngIf, else 
        <app-tasks *ngIf="selectedUser; else fallback" [user]="selectedUser!.name" />
         <ng-template #fallback>
           <p id="fallback">Select a user to view their tasks</p>
         </ng-template>
    
    37. two-way binding is combination property + event binding

    38. NgModel directive, <input ngModel> (starts with ng means it's provided by angular).
        An element enhancement that helps with extracting (or changing) user input values. 

        Directives, unlike components, don't have a template. 
        (add extra functionalities to elements). 
    
    39. Components are directives! directives with templates. 

    40. this syntax, enables 2 way binding in angular, [(ngModel)], 
        ngModel is for input, textarea elements and other form elements.
    41. 2-way binding --> listen for input and also output data inside the same element.
    42. You have to import FormsModule, in order to use ngModel in components.
    43. FormsModule is a collection of directives and features that help you with dealing with forms and with user input.

    44. In html, for input elements, it yields string value, even if it's as below
       <input type="data" .../>

    45. Instead of normal properties, if you want to detect change detection using signals, you don't have to
        change anything as above inside templates, you only have to import Signal from '@angular/core';
        and do as ---> enteredTitle = signal(''); that's it, if you hover on the template value, 
        this enteredTitle will show as writableSignals inside template(html file).
    46. But you shouldn't read signals when performed 2way binding using ---> [(ngModel)]="enteredTitle()",
       read signal using () next to property.
    
    47. In html when you click a button inside a form, it will send a req to the server, but our server is not
        configured yet to handle this data.
    48. In angular it's easy if we import FormsModule, we have a component inside this with form selector, this
        handles this above part(47).
    49. As now this module took control of our form element, it gives an event to emit this data.

    50. Suppose you want to have a common UI element which is shared (for ex: a wrapper), you can have it inside 
        shared folder using (ng g c shared/card), you can then wrapper any comp with this UI element.
        // shared UI html markup 
        <div>
          <ng-content/> (this acts as a placeholder)
        </div>

        wrapped like below, 
        <app-card> 
          some markup 
        </app-card>
    
    51. Pipes in angular --> output transformers (things that transform outputs inside template)
        ex: <time datetime="">{{ task.dueDate | date:'short'}}</time>, 
        after : --> we can config, here it is short, we also have fullDate, etc, refer docs.
    
    52. Services: In our ex: inside tasks component, we are doing a lot of operations in order to manipulation/
                  update tasks array, which is also being used by different other components, and they also update 
                  them, therefore it's better to manage this data in a separate service. 
        Services in angular is just another class
    
    53. public keyword inside class, template can also access. 
        private --> only inside class
    
    54. A computed property is a value derived from other reactive state or signals. 
        It is recalculated automatically whenever its dependencies change. 
        
        Ex: import { signal, computed } from '@angular/signals';

           // Define reactive state
           const firstName = signal('John');
           const lastName = signal('Doe');

           // Define computed property
           const fullName = computed(() => `${firstName()} ${lastName()}`);

           // Usage in a component or template
           console.log(fullName()); // Outputs: John Doe

           // If firstName or lastName changes, fullName will automatically update
           firstName.set('Jane');
           console.log(fullName()); // Outputs: Jane Doe

 */

/**
 * Essentials Summary: 
 * 1. Explored crucial angular features 
 * 2. Components, it's config obj
 * 3. Components (talk to each other) using Input, Output 
 * 4. Input (from parent to child)
 * 5. Output (child to parent using event emitter)
 * 
 * template binding syntax 
 * 6. (string interpolation --> {{}})
 * 7. property binding 
 * 8. event binding (listen to events)
 * 9. special way --> two-way, using special syntax [()], 'on' properties support it, most properties support it,
 *    but ngModel supports it, which is offered by ngmodel directive, import it and unlock FormsModule to implement
 *    2 way binding on an input element for ex, which allows you to listen to changes, while also being able to send
 *    back data into the input.
 * 10. By default, angular watches for events that could lead to data changes and therefore UI changes automatically
 *     with help of an internal package called zone.js
 * 11. You can also use signal, where angular is not watching for all kinds of events that could lead to changes, but
 *     where you instead explicitly notify angular about changes by, for ex: calling the set method on a signal value.
 *     And where angular sets up a subscription, whenever you read a signal, so that it knows which places are interested
 *     in those data changes and should potentially be updated. Better state management mechanism and can potentially 
 *     lead to better performance.
 * 12. @if, (v17), before that we have ngIf directive which as a more clunky to use.
 * 13. @for() (v17)
 * 14. Dynamically add css class, inside user.component.html
 *     [class.active]="selected" -----> class binding syntax
 * 15. Special <ng-content> syntax for wrapper UI (shared/card) ---> allows you to define a slot in the markup of a 
 *     template that will be used to render the content
 * 16. Pipes --> output transformers --> {{task.date | date:'fullDate'}}
 * 17. Form submission, handles by FormModule, it gives ngSubmit event, prevents default http req to the server
 *     that serves the website. 
 * 18. Services: It's the combination of services and angular's dependency injection mechanism. 
 *     Concept is simple, outsource data/logic to a Service and then inject that Service into all the components
 *     that might be interested in that data or some of the methods exposed by this service. 
 *     You can inject that Service by decorating the service class with the @Injectable decorator, which in the end, 
 *     tells angular that it should be aware of this service and that this is something you wanna inject somewhere.
 *     And you then do inject it either with the help of constructor by listing the service as a dependency there, 
 *     and it's the type annotation that's important there or with help of the special inject function. 
 *     And then the places where you injected the service can utlise the entire API of that service which therefore makes
 *     sharing logic and data a breeze. 
 * 
 */
