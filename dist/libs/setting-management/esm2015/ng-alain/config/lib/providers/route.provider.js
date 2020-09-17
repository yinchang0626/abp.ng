import { APP_INITIALIZER } from '@angular/core';
import { RoutesService } from '@abp/ng.core';
export const ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                path: '/setting-management',
                name: "SettingManagement::Menu:SettingManagement.MySettings" /* MySettings */,
                parentName: "AbpSettingManagement::Settings" /* Settings */,
                order: 1,
            },
            {
                path: '/setting-management/settings',
                name: "SettingManagement::Menu:SettingManagement.DevelopPage" /* DevelopPage */,
                parentName: "AbpSettingManagement::Settings" /* Settings */,
                order: 2,
            }
        ]);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3NldHRpbmctbWFuYWdlbWVudC9uZy1hbGFpbi9jb25maWcvc3JjL2xpYi9wcm92aWRlcnMvcm91dGUucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRztJQUM3QixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0NBQzlGLENBQUM7QUFFRixTQUFTLGVBQWUsQ0FBQyxNQUFxQjtJQUM1QyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDVDtnQkFDRSxJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixJQUFJLHlFQUF3QztnQkFDNUMsVUFBVSxpREFBeUM7Z0JBQ25ELEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsOEJBQThCO2dCQUNwQyxJQUFJLDJFQUF5QztnQkFDN0MsVUFBVSxpREFBeUM7Z0JBQ25ELEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVTZXR0aW5nTWFuYWdlbWVudFJvdXRlTmFtZXMgfSBmcm9tICcuLi9lbnVtcy9yb3V0ZS1uYW1lcyc7XHJcbmltcG9ydCB7IGVTZXR0aW5nTWFuYWdlbWVudFJvdXRlTmFtZXMgYXMgQWJwZVNldHRpbmdNYW5hZ2VtZW50Um91dGVOYW1lcyB9IGZyb20gJ0BhYnAvbmcuc2V0dGluZy1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgUm91dGVzU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUk9VVEVfUFJPVklERVJTID0gW1xyXG4gIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBjb25maWd1cmVSb3V0ZXMsIGRlcHM6IFtSb3V0ZXNTZXJ2aWNlXSwgbXVsdGk6IHRydWUgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXM6IFJvdXRlc1NlcnZpY2UpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgcm91dGVzLmFkZChbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnL3NldHRpbmctbWFuYWdlbWVudCcsXHJcbiAgICAgICAgbmFtZTplU2V0dGluZ01hbmFnZW1lbnRSb3V0ZU5hbWVzLk15U2V0dGluZ3MsXHJcbiAgICAgICAgcGFyZW50TmFtZTpBYnBlU2V0dGluZ01hbmFnZW1lbnRSb3V0ZU5hbWVzLlNldHRpbmdzLFxyXG4gICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9zZXR0aW5nLW1hbmFnZW1lbnQvc2V0dGluZ3MnLFxyXG4gICAgICAgIG5hbWU6ZVNldHRpbmdNYW5hZ2VtZW50Um91dGVOYW1lcy5EZXZlbG9wUGFnZSxcclxuICAgICAgICBwYXJlbnROYW1lOkFicGVTZXR0aW5nTWFuYWdlbWVudFJvdXRlTmFtZXMuU2V0dGluZ3MsXHJcbiAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIH0gICAgICBcclxuICAgIF0pO1xyXG4gIH07XHJcbn1cclxuIl19