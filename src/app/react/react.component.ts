import { Component, OnInit } from '@angular/core';
import ReactView from 'react-view';
import HelloReact from './hello-react';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './react.component.scss' ],
  templateUrl: './react.component.html'
})
export class ReactComponent implements OnInit {

    constructor(private translate: TranslateService) {
    }

    public ngOnInit(){
        ReactView.render(HelloReact, 'react-root');
    }
}
