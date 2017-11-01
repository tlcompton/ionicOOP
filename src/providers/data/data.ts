import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  myData = {
    "A": [
        {word:"Apple"},
        {word:"Aunt"},
        {word:"Awake"},
        {word:"Adult"}
      ],

    "B": [
          {word: "Bones"},
          {word: "Boxcar"},
          {word: "Breeze"},
          {word: "Booze"}
  ],

    "C": [

        {word:"Country"},
        {word:"Chilly"},
        {word:"Cowboy"},
        {word:"Comedy"}
    ],

    "D": [
        {word:"Donkey"},
        {word:"Dog"},
        {word:"Daylight"},
        {word:"Dead"},
        {word:"Dust"}
     ]

}


  constructor() {

  }


  getAData():Object {
    return this.myData.A;
  }

  getBData():Object {
    return this.myData.B;
  }

  getCData():Object {
    return this.myData.C;
  }

  getDData():Object {
    return this.myData.D;
  }



}
