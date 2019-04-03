import { Component } from '@angular/core';
import { CityRepository } from '../../model/city.repository';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  public cities: string[] = [];
  public citySelected = false;
  public getImageForCity = '';


  constructor(private dataSource: CityRepository) {
   this.subscribeToCitiesData();
  }

  subscribeToCitiesData(){
    this.dataSource.getData().subscribe(data => {
      this.cities = data.map( city => city.city.toLocaleUpperCase());
    })
  }

  searchCity(cityName: string) {
    if (this.cities.indexOf(cityName.trim().toLocaleUpperCase()) > -1) {
      this.cities[this.cities.indexOf(cityName)] ? (this.citySelected = true) : (this.citySelected = false);
    }
  }
}
