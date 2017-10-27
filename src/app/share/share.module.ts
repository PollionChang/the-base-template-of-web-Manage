import {NgModule, ModuleWithProviders, Injector} from '@angular/core';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from '../pages/login/login.component';
import {SimpleToken, TokenService, deepExtend} from './service/token.service';
import {AuthService} from './service/auth.service';
import {
  defaultSettings,
  HY_TOKEN_WRAPPER_TOKEN,
  HY_OPTIONS_TOKEN,
  HY_PROVIDERS_TOKEN,
  HY_INTERCEPTOR_HEADER,
  HY_USER_OPTIONS_TOKEN
} from '../../data/CONFIG';
import {TreeViewDirective} from './directives/tree-view.directive';

export interface AuthOptions {
  forms?: any;
  providers?: any;
}

export function AuthServiceFactory(config, tokenService, injector) {
  const providers = config.providers || {};
  for (let key in providers) {
    if (providers.hasOwnProperty(key)) {
      const provider = providers[key];
      const object = injector.get(provider.service);
      object.setConfig(provider.config || {});
    }
  }
  return new AuthService(tokenService, injector, providers);
}


export function OptionsFactory(options) {
  return deepExtend(defaultSettings, options);
}

export const Local_CORE_PROVIDER = [
  TokenService,

  {provide: HY_OPTIONS_TOKEN, useFactory: OptionsFactory, deps: [HY_USER_OPTIONS_TOKEN]},
  {provide: HY_PROVIDERS_TOKEN, useValue: {}},
  {provide: HY_INTERCEPTOR_HEADER, useValue: 'Authorization'},
  {provide: HY_TOKEN_WRAPPER_TOKEN, useClass: SimpleToken},
  {
    provide: AuthService,
    useFactory: AuthServiceFactory,
    deps: [HY_OPTIONS_TOKEN, TokenService, Injector]
  }
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    TreeViewDirective
  ],
  exports: [
    LoginComponent, TreeViewDirective
  ],
  providers: [
    {
      provide: AuthService,
      useFactory: AuthServiceFactory,
      deps: [HY_OPTIONS_TOKEN, TokenService, Injector]
    }
  ]
})
export class ShareModule {
  static forRoot(AuthOptions?: AuthOptions): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ShareModule,
      providers: [...Local_CORE_PROVIDER, {provide: HY_USER_OPTIONS_TOKEN, useValue: AuthOptions}]
    };
  }

}
