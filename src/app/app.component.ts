import {Component, OnInit} from '@angular/core';
import {ClickService} from './click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]
})
export class AppComponent implements OnInit {



    constructor(  ) {
    }

    ngOnInit(): void {

}

}
