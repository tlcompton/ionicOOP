import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  header1 = {};
  header2 = {};
  header3 = {};
  header4 = {};

  constructor(public navCtrl: NavController, public dataService:DataProvider) {

    this.header1 = this.dataService.getAData();
    this.header2 = this.dataService.getBData();
    this.header3 = this.dataService.getCData();
    this.header4 = this.dataService.getDData();

  }


}
