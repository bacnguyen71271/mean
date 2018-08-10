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
import {PlatformLocation } from '@angular/common';

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
  template: `
    <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <h1 title="{{name}}"><a class="navbar-brand logo" href="{{url}}" >{{ name }}</a></h1>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarsExample07" style="">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/posts">Posts <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="react">React</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="api/graphql">Graphql</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</a>
            <div class="dropdown-menu" aria-labelledby="dropdown07">
              <a class="dropdown-item" (click)="useLanguage('en')" >English</a>
              <a class="dropdown-item" (click)="useLanguage('vn')" >Vietnamese</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>
    </header>
    <
    <router-outlet></router-outlet>
    <footer>
    </footer>
  `,
  providers: [PostsService]
})
export class AppComponent implements OnInit {
  //public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Mean stack starter';
  public url = '';



  constructor(private translate: TranslateService,platformLocation: PlatformLocation) {
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
