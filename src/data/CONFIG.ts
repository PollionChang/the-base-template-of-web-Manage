/*
   'deBug'：本地开发，'service'：在线服务，'serviceTest'：测试服务
   */
import {InjectionToken} from '@angular/core';

export const CONFIG = {
  serviceType: 'deBug', // 开关，'deBug'：本地开发，'service'：在线服务，'serviceTest'：测试服务


  baseUrl: 'server',
  bigdataUrl: 'http://hdc.hooray.cn/bigdata-server/',
  login: 'http://tv.hooray.cn/hds-server/api/public/oauth.login',

  deBug: {
    login: 'http://192.168.1.72:4200/hds-server/api/public/oauth.login'
  },
  service: {},
  serviceTest: {}

};

export const HY_TOKEN_WRAPPER_TOKEN = new InjectionToken('wrapper token');
export const HY_PROVIDERS_TOKEN = new InjectionToken('providers token');
export const HY_INTERCEPTOR_HEADER = new InjectionToken('Interceptor Header');
export const HY_OPTIONS_TOKEN = new InjectionToken('token options');
export const HY_USER_OPTIONS_TOKEN = new InjectionToken(' User Auth Options');
export const defaultSettings = {};
