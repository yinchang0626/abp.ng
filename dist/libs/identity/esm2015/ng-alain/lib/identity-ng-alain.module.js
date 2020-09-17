var IdentityNgAlainModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
//import { InitialService} from './services/initial.service'
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { IdentityModule } from '@abp/ng.identity';
let IdentityNgAlainModule = IdentityNgAlainModule_1 = class IdentityNgAlainModule {
    static forChild() {
        return {
            ngModule: IdentityNgAlainModule_1,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(IdentityNgAlainModule_1.forChild());
    }
};
IdentityNgAlainModule = IdentityNgAlainModule_1 = __decorate([
    NgModule({
        imports: [
            CoreModule,
            NgAlainBasicModule,
            PermissionManagementNgAlainModule,
            NgxValidateCoreModule,
            IdentityModule
        ],
        declarations: [UsersComponent, RolesComponent],
        entryComponents: [UsersComponent, RolesComponent]
    })
], IdentityNgAlainModule);
export { IdentityNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pZGVudGl0eS9uZy1hbGFpbi9zcmMvbGliL2lkZW50aXR5LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2Riw0REFBNEQ7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBYWxELElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFxQjtJQUNoQyxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyx1QkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDRixDQUFBO0FBWFkscUJBQXFCO0lBWGpDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsaUNBQWlDO1lBQ2pDLHFCQUFxQjtZQUNyQixjQUFjO1NBQ2Y7UUFDRCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO1FBQzlDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7S0FDbEQsQ0FBQztHQUNXLHFCQUFxQixDQVdqQztTQVhZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBbGFpbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF6eU1vZHVsZUZhY3RvcnksIENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUgfSBmcm9tICdAZnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluJztcclxuLy9pbXBvcnQgeyBJbml0aWFsU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9pbml0aWFsLnNlcnZpY2UnXHJcbmltcG9ydCB7IE5neFZhbGlkYXRlQ29yZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcbmltcG9ydCB7IElkZW50aXR5TW9kdWxlIH0gZnJvbSAnQGFicC9uZy5pZGVudGl0eSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBOZ0FsYWluQmFzaWNNb2R1bGUsXHJcbiAgICBQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUsXHJcbiAgICBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUsXHJcbiAgICBJZGVudGl0eU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVXNlcnNDb21wb25lbnQsIFJvbGVzQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtVc2Vyc0NvbXBvbmVudCwgUm9sZXNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU5nQWxhaW5Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElkZW50aXR5TmdBbGFpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IElkZW50aXR5TmdBbGFpbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yTGF6eSgpOiBOZ01vZHVsZUZhY3Rvcnk8SWRlbnRpdHlOZ0FsYWluTW9kdWxlPiB7XHJcbiAgICByZXR1cm4gbmV3IExhenlNb2R1bGVGYWN0b3J5KElkZW50aXR5TmdBbGFpbk1vZHVsZS5mb3JDaGlsZCgpKTtcclxuICB9XHJcbn1cclxuIl19