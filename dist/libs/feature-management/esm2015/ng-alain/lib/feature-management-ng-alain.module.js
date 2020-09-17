import { __decorate } from "tslib";
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { FeatureManagementComponent } from './components/feature-management/feature-management.component';
let FeatureManagementNgAlainModule = class FeatureManagementNgAlainModule {
};
FeatureManagementNgAlainModule = __decorate([
    NgModule({
        imports: [
            CoreModule,
            NgAlainBasicModule,
            FeatureManagementModule
        ],
        exports: [FeatureManagementComponent],
        declarations: [FeatureManagementComponent]
    })
], FeatureManagementNgAlainModule);
export { FeatureManagementNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvZmVhdHVyZS1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBVzFHLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0NBQUksQ0FBQTtBQUFsQyw4QkFBOEI7SUFUMUMsUUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsVUFBVTtZQUNWLGtCQUFrQjtZQUNsQix1QkFBdUI7U0FDMUI7UUFDRCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUNyQyxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUM3QyxDQUFDO0dBQ1csOEJBQThCLENBQUk7U0FBbEMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnRNb2R1bGUgfSBmcm9tICdAYWJwL25nLmZlYXR1cmUtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0FsYWluQmFzaWNNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWF0dXJlLW1hbmFnZW1lbnQvZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvcmVNb2R1bGUsXHJcbiAgICAgICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgICAgIEZlYXR1cmVNYW5hZ2VtZW50TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW0ZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW0ZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIHsgfVxyXG4iXX0=