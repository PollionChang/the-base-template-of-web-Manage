import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CONFIG} from '../../../data/CONFIG';
import {HttpService} from '../../share/service/http.service';
import {AuthService} from '../../share/service/auth.service';
import {CookieService} from '../../share/service/cookie.service';
import {Router} from '@angular/router';

interface LoginInfo {
  userName: string;
  password: string;
  agree?: boolean;
  identify?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showCaptcha: boolean = false;
  public login: FormGroup;
  private captchaImgUrl: string;
  private _checkCaptcha: string = sessionStorage.checkCaptcha || '0';
  public errMsg: string;

  constructor(private fb: FormBuilder,
              private  http: HttpService,
              private auth: AuthService,
              protected _cookie: CookieService,
              private _router: Router) {
    this.errMsg = '';
    if (this.checkCaptcha === '1') {
      this.showCaptcha = true;
      this.refreshCaptcha();
    }
  }

  ngOnInit() {
    this.login = this.fb.group({
      userName: ['', Validators.required],

      password: ['', Validators.required],
      identify: ['', Validators.required],
      agree: [{value: true, disabled: true}]
    });
  }

  onSubmit({value: login}: { value: LoginInfo }) {
    if (this._cookie.get('Authorization')) {
      this._cookie.delete('Authorization');
    }
    if (login.userName === '') {
      this.errMsg = '用户名不能为空';
      return;
    }
    if (login.password === '') {
      this.errMsg = '密码不能为空';
      return;
    }
    if (sessionStorage.checkCaptcha === '1') {
      if (login.identify === '') {
        this.errMsg = '验证码不能为空';
        return false;
      }
    }
    this.http.postFormData(CONFIG[CONFIG.serviceType].login + '?version=1.0', {
      account: login.userName,
      psw: login.password,
      captchaCode: login.identify || '',
      accessSource: 'hdsaas'
    }).subscribe(data => {
      if (data['errcode'] == '0') {
        this.auth.setToken(data['bizResult'].token);
        this._cookie.set('Authorization', data['bizResult'].token);
        console.log('start');
        this._router.navigateByUrl('./views/kpiIndex').then((res) => {
          console.log('跳转成功' + res);
        }).catch();
      } else {
        this.errMsg = data['submsg'];
      }
    });
  }

  refreshCaptcha() {
    // this.captchaImgUrl = this.hdsUrl + CONFIG.commonUrl.user.captcha + Math.random();
  }

  get checkCaptcha(): string {
    return this._checkCaptcha;
  }

  set checkCaptcha(value: string) {
    this._checkCaptcha = value;
  }

}
