import { __decorate, __metadata } from "tslib";
import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService } from '@abp/ng.core';
let RolesComponent = class RolesComponent extends AbpRolesComponent {
    constructor(_list, _confirmationService, _fb, _store) {
        super(_list, _confirmationService, _fb, _store);
        this._list = _list;
        this._confirmationService = _confirmationService;
        this._fb = _fb;
        this._store = _store;
    }
};
RolesComponent = __decorate([
    Component({
        selector: 'ng-alain-roles',
        template: "<!-- <nz-page-header class=\"site-page-header\" [nzTitle]=\"'AbpIdentity::Roles' | abpLocalization\">\r\n</nz-page-header> -->\r\n<nz-card [nzBordered]=\"false\">\r\n  <button nz-button [abpPermission]=\"'AbpIdentity.Roles.Create'\" (click)=\"add()\" [nzType]=\"'primary'\">\r\n    <i nz-icon nzType=\"plus\"></i>\r\n    <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n  </button>\r\n  <div class=\"my-md\"></div>\r\n  <nz-table #basicTable [nzData]=\"data$ | async\" [nzPageSize]=\"list.maxResultCount\" [nzTotal]=\"totalCount$ | async\"\r\n    [nzLoading]=\"list.isLoading$ | async\" [nzFrontPagination]=\"false\" (nzPageIndexChange)=\"list.page=$event-1;\">\r\n    <thead>\r\n      <tr>\r\n        <th>{{ 'AbpIdentity::DisplayName:RoleName' | abpLocalization }}</th>\r\n        <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of basicTable.data\">\r\n        <td>{{ data.name }}\r\n          <nz-tag [nzColor]=\"'#17a2b8'\" *ngIf=\"data.isPublic\">\r\n            {{ 'AbpIdentity::DisplayName:IsPublic' | abpLocalization }}</nz-tag>\r\n          <nz-tag [nzColor]=\"'#28a745'\" *ngIf=\"data.isDefault\">\r\n            {{ 'AbpIdentity::DisplayName:IsDefault' | abpLocalization }}</nz-tag>\r\n        </td>\r\n        <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.Update'\" (click)=\"edit(data.id)\">\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                (click)=\"openPermissionsModal(data.name)\">\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.Delete'\" (click)=\"delete(data.id, data.name)\">\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</nz-card>\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{(selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization}}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n          {{ 'AbpIdentity::RoleName' | abpLocalization }}</nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n          <input nz-input formControlName=\"name\" id=\"role-name\" />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n          <label nz-checkbox formControlName=\"isDefault\">\r\n            <span>\r\n              {{\r\n                  'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n              }}\r\n            </span>\r\n          </label>\r\n          <label nz-checkbox formControlName=\"isPublic\">\r\n            <span>\r\n              {{\r\n                  'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n              }}\r\n            </span>\r\n          </label>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"form?.invalid\">\r\n      {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n<ng-alain-permission-management [(visible)]=\"visiblePermissions\" providerName=\"R\" [providerKey]=\"providerKey\">\r\n</ng-alain-permission-management>",
        providers: [ListService]
    }),
    __metadata("design:paramtypes", [ListService,
        ConfirmationService,
        FormBuilder,
        Store])
], RolesComponent);
export { RolesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pZGVudGl0eS9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxJQUFJLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTNDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWUsU0FBUSxpQkFBaUI7SUFDbkQsWUFDVSxLQUFrQixFQUNsQixvQkFBeUMsRUFDekMsR0FBZ0IsRUFDaEIsTUFBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUp2QyxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFDekMsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFPO0lBRXZCLENBQUM7Q0FDRixDQUFBO0FBUlksY0FBYztJQUwxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLGc5SUFBcUM7UUFDckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO0tBQ3pCLENBQUM7cUNBR2lCLFdBQVc7UUFDSSxtQkFBbUI7UUFDcEMsV0FBVztRQUNSLEtBQUs7R0FMWixjQUFjLENBUTFCO1NBUlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvbGVzQ29tcG9uZW50IGFzIEFicFJvbGVzQ29tcG9uZW50IH0gZnJvbSAnQGFicC9uZy5pZGVudGl0eSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgTGlzdFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXJvbGVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcm9sZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW0xpc3RTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvbGVzQ29tcG9uZW50IGV4dGVuZHMgQWJwUm9sZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfbGlzdDogTGlzdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlKSB7XHJcbiAgICBzdXBlcihfbGlzdCxfY29uZmlybWF0aW9uU2VydmljZSwgX2ZiLCBfc3RvcmUpO1xyXG4gIH1cclxufVxyXG4iXX0=