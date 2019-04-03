import { Component, OnInit } from '@angular/core';
import { CityRepository} from '../../model/city.repository';
import { City} from '../../model/cities.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  cities = [];
  constructor(private dataSource: CityRepository) { }

  ngOnInit() {
    // this.cities = this.dataSource.getData().map(city => city.city);
     console.log(this.dataSource.getData());

    this.dataSource.getData().forEach(c => {
      console.log('im getting', c);
    })
  }

  searchCity(cityName: string) {
    this.cities.forEach(c => {
      console.log(c);
    });
  }

}
