import { AccountModule } from '@abp/ng.account';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { AlainBasicModule } from '@fs/alain/basic';
import { AccountNgxAdminRoutingModule } from './account-ngx-admin-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { SharedModule } from '../shared/shared.module';
//import { UserLoginComponent } from './components/login/login.component';
//import { UserRegisterComponent } from './components/register/register.component';

@NgModule({
    declarations:[],// [UserLoginComponent, UserRegisterComponent],
    imports: [
        CoreModule,
        SharedModule,
        AccountNgxAdminRoutingModule,
        AccountModule
    ]
})
export class AccountNgxAdminModule { }
