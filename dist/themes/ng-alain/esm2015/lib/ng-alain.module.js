var NgAlainModule_1;
import { __decorate } from "tslib";
// tslint:disable: no-duplicate-imports
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
// #region default language
// 参考：https://ng-alain.com/docs/i18n
import { default as ngLang } from '@angular/common/locales/zh';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';
import { zhCN as dateLang } from 'date-fns/locale';
import { NZ_DATE_LOCALE, NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd/i18n';
const LANG = {
    abbr: 'zh',
    ng: ngLang,
    zorro: zorroLang,
    date: dateLang,
    delon: delonLang,
};
// register angular
import { registerLocaleData } from '@angular/common';
registerLocaleData(LANG.ng, LANG.abbr);
const ɵ0 = LANG.abbr, ɵ1 = LANG.zorro, ɵ2 = LANG.date, ɵ3 = LANG.delon;
const LANG_PROVIDES = [
    { provide: LOCALE_ID, useValue: ɵ0 },
    { provide: NZ_I18N, useValue: ɵ1 },
    { provide: NZ_DATE_LOCALE, useValue: ɵ2 },
    { provide: DELON_LOCALE, useValue: ɵ3 },
];
// #endregion
// #region i18n services
import { I18NService } from '@fs/ng-alain/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// 加载i18n语言文件
export function I18nHttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, `assets/tmp/i18n/`, '.json');
}
const I18NSERVICE_MODULES = [
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: I18nHttpLoaderFactory,
            deps: [HttpClient],
        },
    }),
];
const I18NSERVICE_PROVIDES = [
    { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false }
];
// #endregion
// #region global third module
const GLOBAL_THIRD_MODULES = [];
// #endregion
// #region JSON Schema form (using @delon/form)
import { JsonSchemaModule } from '@fs/ng-alain/shared';
const FORM_MODULES = [JsonSchemaModule];
// #endregion
// #region Http Interceptors
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { DefaultInterceptor } from '@fs/ng-alain/core';
// import { SimpleInterceptor } from '@delon/auth';
const INTERCEPTOR_PROVIDES = [
// { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
// { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
// #endregion
// #region Startup Service
import { StartupService } from '@fs/ng-alain/core';
export function StartupServiceFactory(startupService) {
    let fun = () => startupService.load();
    return fun;
}
const APPINIT_PROVIDES = [
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true,
    },
];
// #endregion
import { CoreModule } from '@fs/ng-alain/core';
import { GlobalConfigModule } from './global-config.module';
//import { LayoutModule } from './layout/layout.module';
import { STWidgetModule } from '@fs/ng-alain/shared';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { NgxValidateCoreModule } from '@ngx-validate/core';
let RootNgAlainModule = class RootNgAlainModule {
};
RootNgAlainModule = __decorate([
    NgModule({
        imports: [
            NgxValidateCoreModule.forRoot({
                targetSelector: '.form-group',
                blueprints: {
                    creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                    email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                    invalid: 'AbpValidation::ThisFieldIsNotValid.',
                    max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                    min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                    ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                    passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                    range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    required: 'AbpValidation::ThisFieldIsRequired.',
                    url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                },
            }),
            //ThemeCoreModule.forRoot(),
            NgAlainSharedModule.forRoot(),
            NgAlainBasicModule.forRoot(),
        ],
    })
], RootNgAlainModule);
export { RootNgAlainModule };
// #endregion
import { AlainConfigService } from '@delon/util';
import { THEMECORE_OPTIONS } from '@fs/theme.core';
let NgAlainModule = NgAlainModule_1 = class NgAlainModule {
    static forRoot(options = { loadCodes: false }) {
        return {
            ngModule: NgAlainModule_1,
            providers: [
                { provide: THEMECORE_OPTIONS, useValue: options }
            ],
        };
    }
};
NgAlainModule = NgAlainModule_1 = __decorate([
    NgModule({
        imports: [
            GlobalConfigModule.forRoot(),
            CoreModule,
            //LayoutModule,
            STWidgetModule,
            RootNgAlainModule,
            ...I18NSERVICE_MODULES,
            ...GLOBAL_THIRD_MODULES,
            ...FORM_MODULES,
        ],
        providers: [
            AlainConfigService,
            ...LANG_PROVIDES, ...INTERCEPTOR_PROVIDES, ...I18NSERVICE_PROVIDES, ...APPINIT_PROVIDES
        ],
    })
], NgAlainModule);
export { NgAlainModule };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL3NyYy9saWIvbmctYWxhaW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXVDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTFGLDJCQUEyQjtBQUMzQixvQ0FBb0M7QUFDcEMsT0FBTyxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssSUFBSSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksSUFBSSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakYsTUFBTSxJQUFJLEdBQUc7SUFDWCxJQUFJLEVBQUUsSUFBSTtJQUNWLEVBQUUsRUFBRSxNQUFNO0lBQ1YsS0FBSyxFQUFFLFNBQVM7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsU0FBUztDQUNqQixDQUFDO0FBQ0YsbUJBQW1CO0FBQ25CLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1dBRUwsSUFBSSxDQUFDLElBQUksT0FDWCxJQUFJLENBQUMsS0FBSyxPQUNILElBQUksQ0FBQyxJQUFJLE9BQ1gsSUFBSSxDQUFDLEtBQUs7QUFKL0MsTUFBTSxhQUFhLEdBQUc7SUFDcEIsRUFB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QUNkLGlCQUFpQjtZQUNqQixHQUFHLG1CQUFtQjtZQUN0QixHQUFHLG9CQUFvQjtZQUN2QixHQUFHLFlBQVk7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxrQkFBa0I7WUFDbEIsR0FBRyxhQUFhLEVBQUUsR0FBRyxvQkFBb0IsRUFBRSxHQUFHLG9CQUFvQixFQUFFLEdBQUcsZ0JBQWdCO1NBQUM7S0FDM0YsQ0FBQztHQUNXLGFBQWEsQ0FTekI7U0FUWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTE9DQUxFX0lELCBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gI3JlZ2lvbiBkZWZhdWx0IGxhbmd1YWdlXHJcbi8vIOWPguiAg++8mmh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvaTE4blxyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG5nTGFuZyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL3poJztcclxuaW1wb3J0IHsgREVMT05fTE9DQUxFLCB6aF9UVyBhcyBkZWxvbkxhbmcgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyB6aENOIGFzIGRhdGVMYW5nIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuaW1wb3J0IHsgTlpfREFURV9MT0NBTEUsIE5aX0kxOE4sIHpoX1RXIGFzIHpvcnJvTGFuZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmNvbnN0IExBTkcgPSB7XHJcbiAgYWJicjogJ3poJyxcclxuICBuZzogbmdMYW5nLFxyXG4gIHpvcnJvOiB6b3Jyb0xhbmcsXHJcbiAgZGF0ZTogZGF0ZUxhbmcsXHJcbiAgZGVsb246IGRlbG9uTGFuZyxcclxufTtcclxuLy8gcmVnaXN0ZXIgYW5ndWxhclxyXG5pbXBvcnQgeyByZWdpc3RlckxvY2FsZURhdGEgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5yZWdpc3RlckxvY2FsZURhdGEoTEFORy5uZywgTEFORy5hYmJyKTtcclxuY29uc3QgTEFOR19QUk9WSURFUyA9IFtcclxuICB7IHByb3ZpZGU6IExPQ0FMRV9JRCwgdXNlVmFsdWU6IExBTkcuYWJiciB9LFxyXG4gIHsgcHJvdmlkZTogTlpfSTE4TiwgdXNlVmFsdWU6IExBTkcuem9ycm8gfSxcclxuICB7IHByb3ZpZGU6IE5aX0RBVEVfTE9DQUxFLCB1c2VWYWx1ZTogTEFORy5kYXRlIH0sXHJcbiAgeyBwcm92aWRlOiBERUxPTl9MT0NBTEUsIHVzZVZhbHVlOiBMQU5HLmRlbG9uIH0sXHJcbl07XHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gaTE4biBzZXJ2aWNlc1xyXG5pbXBvcnQgeyBJMThOU2VydmljZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9jb3JlJztcclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XHJcblxyXG4vLyDliqDovb1pMThu6K+t6KiA5paH5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiBJMThuSHR0cExvYWRlckZhY3RvcnkoaHR0cDogSHR0cENsaWVudCkge1xyXG4gIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCBgYXNzZXRzL3RtcC9pMThuL2AsICcuanNvbicpO1xyXG59XHJcblxyXG5jb25zdCBJMThOU0VSVklDRV9NT0RVTEVTID0gW1xyXG4gIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcclxuICAgIGxvYWRlcjoge1xyXG4gICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IEkxOG5IdHRwTG9hZGVyRmFjdG9yeSxcclxuICAgICAgZGVwczogW0h0dHBDbGllbnRdLFxyXG4gICAgfSxcclxuICB9KSxcclxuXTtcclxuXHJcbmNvbnN0IEkxOE5TRVJWSUNFX1BST1ZJREVTID0gW1xyXG4gIHsgcHJvdmlkZTogQUxBSU5fSTE4Tl9UT0tFTiwgdXNlQ2xhc3M6IEkxOE5TZXJ2aWNlLCBtdWx0aTogZmFsc2UgfVxyXG5dO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBnbG9iYWwgdGhpcmQgbW9kdWxlXHJcblxyXG5jb25zdCBHTE9CQUxfVEhJUkRfTU9EVUxFUyA9IFtcclxuXTtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gSlNPTiBTY2hlbWEgZm9ybSAodXNpbmcgQGRlbG9uL2Zvcm0pXHJcbmltcG9ydCB7IEpzb25TY2hlbWFNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vc2hhcmVkJztcclxuY29uc3QgRk9STV9NT0RVTEVTID0gW0pzb25TY2hlbWFNb2R1bGVdO1xyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEh0dHAgSW50ZXJjZXB0b3JzXHJcbi8vIGltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4vLyBpbXBvcnQgeyBEZWZhdWx0SW50ZXJjZXB0b3IgfSBmcm9tICdAZnMvbmctYWxhaW4vY29yZSc7XHJcbi8vIGltcG9ydCB7IFNpbXBsZUludGVyY2VwdG9yIH0gZnJvbSAnQGRlbG9uL2F1dGgnO1xyXG5jb25zdCBJTlRFUkNFUFRPUl9QUk9WSURFUyA9IFtcclxuICAvLyB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogU2ltcGxlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcbiAgLy8geyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IERlZmF1bHRJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcclxuXTtcclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBTdGFydHVwIFNlcnZpY2VcclxuaW1wb3J0IHsgU3RhcnR1cFNlcnZpY2UgfSBmcm9tICdAZnMvbmctYWxhaW4vY29yZSc7XHJcbmV4cG9ydCBmdW5jdGlvbiBTdGFydHVwU2VydmljZUZhY3Rvcnkoc3RhcnR1cFNlcnZpY2U6IFN0YXJ0dXBTZXJ2aWNlKSB7XHJcbiAgbGV0IGZ1biA9ICgpID0+IHN0YXJ0dXBTZXJ2aWNlLmxvYWQoKTtcclxuICByZXR1cm4gZnVuO1xyXG59XHJcbmNvbnN0IEFQUElOSVRfUFJPVklERVMgPSBbXHJcbiAgU3RhcnR1cFNlcnZpY2UsXHJcbiAge1xyXG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgdXNlRmFjdG9yeTogU3RhcnR1cFNlcnZpY2VGYWN0b3J5LFxyXG4gICAgZGVwczogW1N0YXJ0dXBTZXJ2aWNlXSxcclxuICAgIG11bHRpOiB0cnVlLFxyXG4gIH0sXHJcbl07XHJcbi8vICNlbmRyZWdpb25cclxuXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vY29yZSc7XHJcbmltcG9ydCB7IEdsb2JhbENvbmZpZ01vZHVsZSB9IGZyb20gJy4vZ2xvYmFsLWNvbmZpZy5tb2R1bGUnO1xyXG4vL2ltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTVFdpZGdldE1vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9zaGFyZWQnO1xyXG5cclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gZ2xvYmFsIHRoaXJkIG1vZHVsZVxyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgTmdBbGFpblNoYXJlZE1vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBOZ0FsYWluQmFzaWNNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBJTklUSUFMX1BST1ZJREVSUywgSU5JVElBTF9USEVNRV9DT1JFX1BST1ZJREVSUywgT3B0aW9ucywgVGhlbWVDb3JlTW9kdWxlIH0gZnJvbSAnQGZzL3RoZW1lLmNvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE5neFZhbGlkYXRlQ29yZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5neFZhbGlkYXRlQ29yZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgdGFyZ2V0U2VsZWN0b3I6ICcuZm9ybS1ncm91cCcsXHJcbiAgICAgIGJsdWVwcmludHM6IHtcclxuICAgICAgICBjcmVkaXRDYXJkOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkSXNOb3RBVmFsaWRDcmVkaXRDYXJkTnVtYmVyLicsXHJcbiAgICAgICAgZW1haWw6ICdBYnBWYWxpZGF0aW9uOjpUaGlzRmllbGRJc05vdEFWYWxpZEVtYWlsQWRkcmVzcy4nLFxyXG4gICAgICAgIGludmFsaWQ6ICdBYnBWYWxpZGF0aW9uOjpUaGlzRmllbGRJc05vdFZhbGlkLicsXHJcbiAgICAgICAgbWF4OiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkTXVzdEJlQmV0d2VlbnswfUFuZHsxfVt7eyBtaW4gfX0se3sgbWF4IH19XScsXHJcbiAgICAgICAgbWF4bGVuZ3RoOlxyXG4gICAgICAgICAgJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZE11c3RCZUFTdHJpbmdPckFycmF5VHlwZVdpdGhBTWF4aW11bUxlbmd0aE9mezB9W3t7IHJlcXVpcmVkTGVuZ3RoIH19XScsXHJcbiAgICAgICAgbWluOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkTXVzdEJlQmV0d2VlbnswfUFuZHsxfVt7eyBtaW4gfX0se3sgbWF4IH19XScsXHJcbiAgICAgICAgbWlubGVuZ3RoOlxyXG4gICAgICAgICAgJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZE11c3RCZUFTdHJpbmdPckFycmF5VHlwZVdpdGhBTWluaW11bUxlbmd0aE9mezB9W3t7IHJlcXVpcmVkTGVuZ3RoIH19XScsXHJcbiAgICAgICAgbmdiRGF0ZTogJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZElzTm90VmFsaWQuJyxcclxuICAgICAgICBwYXNzd29yZE1pc21hdGNoOiAnQWJwSWRlbnRpdHk6OklkZW50aXR5LlBhc3N3b3JkQ29uZmlybWF0aW9uRmFpbGVkJyxcclxuICAgICAgICByYW5nZTogJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZE11c3RCZUJldHdlZW57MH1BbmR7MX1be3sgbWluIH19LHt7IG1heCB9fV0nLFxyXG4gICAgICAgIHJlcXVpcmVkOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkSXNSZXF1aXJlZC4nLFxyXG4gICAgICAgIHVybDogJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZElzTm90QVZhbGlkRnVsbHlRdWFsaWZpZWRIdHRwSHR0cHNPckZ0cFVybCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vZXJyb3JUZW1wbGF0ZTogVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50LFxyXG4gICAgfSksXHJcbiAgICAvL1RoZW1lQ29yZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOZ0FsYWluU2hhcmVkTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE5nQWxhaW5CYXNpY01vZHVsZS5mb3JSb290KCksXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ0FsYWluTW9kdWxlIHsgfVxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFRIRU1FQ09SRV9PUFRJT05TIH0gZnJvbSAnQGZzL3RoZW1lLmNvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBHbG9iYWxDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIC8vTGF5b3V0TW9kdWxlLFxyXG4gICAgU1RXaWRnZXRNb2R1bGUsXHJcbiAgICBSb290TmdBbGFpbk1vZHVsZSxcclxuICAgIC4uLkkxOE5TRVJWSUNFX01PRFVMRVMsXHJcbiAgICAuLi5HTE9CQUxfVEhJUkRfTU9EVUxFUyxcclxuICAgIC4uLkZPUk1fTU9EVUxFUyxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQWxhaW5Db25maWdTZXJ2aWNlLC8vSXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9uZy1hbGFpbi9pc3N1ZXMvMTYyNFxyXG4gICAgLi4uTEFOR19QUk9WSURFUywgLi4uSU5URVJDRVBUT1JfUFJPVklERVMsIC4uLkkxOE5TRVJWSUNFX1BST1ZJREVTLCAuLi5BUFBJTklUX1BST1ZJREVTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQWxhaW5Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IE9wdGlvbnMgPSB7IGxvYWRDb2RlczogZmFsc2UgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdBbGFpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5nQWxhaW5Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogVEhFTUVDT1JFX09QVElPTlMsIHVzZVZhbHVlOiBvcHRpb25zIH1cclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==