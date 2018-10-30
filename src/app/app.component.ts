

import { Component } from '@angular/core';
import {mongoose} from "mongoose" ;

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PyroCRM';

  ngOnInit() {
    $( '#topheader .navbar-nav a' ).on( 'click', function () {
      $( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      $( this ).parent( 'li' ).addClass( 'active' );
    });

 /*  mongoose.connect('mongodb://localhost/pyrocrm')
     .then(() => console.log('Connected to MongoDB...'))
     .catch(err => console.error('Could not connect to MongoDB...'));
     */
  }
}
