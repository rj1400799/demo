/**
 * Modules: older way of writing components, still usable. 
 * 
 * 1. Modules and standalone component's are rivalry, if standalone, it can't be used/imported inside a module.
 * 2. default for standalone for component's is false. 
 * 3. When making your root comp module based, you have to modify your main.ts file (refer file).
 * 4. In module based also, we can have standalone components, i.e inside @NgModule config, 
 *    imports[] for standalone, declarations for modules. 
 * 5. BrowerModule --> it has a collection of things which every angular app requires in order to run it properly.
 *    This includes some generally helpful directives, pipes etc. 
 * 6. we learned how to bootstrap your app when it's module based 
 * 7. We can also have a module inside a standalone comp, we did it in new-task.comp, imports:[FormsModule].
 * 8. Don't say module, say --> Non-standalone comp, this mixing is used while migrating our app. 
 * 
 * 9. Idea of modules --> we can separate our big app into modules, each logically related, 
 *    now, we have a central place (app.module.ts) where all imports are being done and all other components inside the 
 *    module gets leaner. 
 * 
 * 10. Although it's not recommended to use module based, just be aware of. 
 * 11. We have a module where we declare, what all components need to work together. 
 * 12. Modules are like containers, if it's needed anything, it has to import it, it can't pick from it's 
 *     parent. 
 * 13. BrowserModule is ony meant to be included for root comp for which you have bootstrapped your project with.
 * 14. If you need any common features like DatePipe, etc.. you can use CommonModule.
 * 15. ngSubmit & ngModel ---> from FormsModule 
 * 
 */
