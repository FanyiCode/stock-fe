import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plates:any;
  constructor(public navCtrl: NavController,public http: Http) {
    this.http.get('http://localhost:8090/plates')
    .map(data => {
      this.plates = data.json().list
      // console.log(data.json().list);
    })
    .subscribe(list => {
      console.log(list);
    });
  }

}
