/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { PostsService } from './posts/posts.service';
import { PlatformLocation } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `<header>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
        <h1 title="{{name}}"><a class="navbar-brand logo" href="{{url}}" >{{ name }}</a></h1>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarsExample07" style="">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" routerLink="/posts">Posts <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="react">React</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="api/graphql">Graphql</a>
              </li>
              
          </ul>
          <ul class="nar-right navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle user" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i class="fa fa-user fa-2" aria-hidden="true"></i>  Account</a>
              <div class="dropdown-menu" aria-labelledby="dropdown07">
                    <a class="dropdown-item" (click)="useLanguage('en')" >Login</a>
                    <a class="dropdown-item" (click)="useLanguage('vn')" >Register</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/posts"><i class="fa fa-cloud-upload fa-2" aria-hidden="true"></i>  Upload</a>
            </li>
            
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</a>
                <div class="dropdown-menu" aria-labelledby="dropdown07">
                    <a class="dropdown-item" (click)="useLanguage('en')" >English</a>
                    <a class="dropdown-item" (click)="useLanguage('vn')" >Vietnamese</a>
                </div>
            </li>
            <li class="nav-item">
              <a class="nav-link get-vip-button" routerLink="/posts">GET VIP NOW</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-md-0">
              <input class="form-control input-search" type="text" placeholder="Search" aria-label="Search">
          </form>
        </div>
    </div>
  </nav>
</header>
<div class="content">
  <div class="container">
    <router-outlet></router-outlet>
  </div>
</div>
<footer>
  <div class="container">
    <div class="wapper">
        <div class="row">
          <div class="col-sm-3">.col-sm-4</div>
          <div class="col-sm-3">.col-sm-4</div>
          <div class="col-sm-3">.col-sm-4</div>
          <div class="col-sm-3">.col-sm-4</div>
          
        </div>
    </div>
    <div class="border border-bot"></div>
    <div class="wapper wrrap-bottom">
        <div class="row">
          <div class="col-sm-2">
              <a class="navbar-brand logo while" href="{{url}}" >{{ name }}</a>
          </div>
          <div class="col-sm-10">
              <div>
                <p>Footer</p>
                <p class="vega">© 2018 Javgle Corporation</p>
              </div>
          </div>
        </div>
    </div>
  </div>
</footer>`,
  providers: [PostsService]
})
export class AppComponent implements OnInit {
  //public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Mean stack starter';
  public url = '';



  constructor(private translate: TranslateService, platformLocation: PlatformLocation) {
    this.url = (platformLocation as any).href
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  //constructor(){}

  /*
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
 
  */

  public ngOnInit() {
    //console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
