import { Component } from '@angular/core';
import { CityRepository } from '../../model/city.repository';
import {NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  public cities: string[] = [];
  public citySelected = false;
  public getImageForCity = '';


  constructor(private dataSource: CityRepository, private notification: NotificationService) {
   this.subscribeToCitiesData();
  }

  subscribeToCitiesData(){
    this.dataSource.getData().subscribe(data => {
      this.cities = data.map( city => city.city.toLocaleUpperCase());
    })
     return this.cities; // --> For testing purpose
  }

  searchCity(cityName: string) {
    const formatedCityName = cityName.trim().toLocaleUpperCase();
    this.cities.filter( c => {
      if( c.includes(formatedCityName)){
        return c; // --> I actually didn't need to use it so, returning this For testing purpose
      }
    })
  }

  searchGoogleImages() {
    if(this.getImageForCity.length < 3) {
      this.notification.error('City name too short 😕 please enter a correct city name')
    } else {
      // mozila doesn't have _blank href so i had to use this
      window.open(`https://www.google.com/search?tbm=isch&q=${this.getImageForCity}`, '_blank')
    }
  }
}
