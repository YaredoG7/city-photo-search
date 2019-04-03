import {Injectable} from "@angular/core";
import { City} from './cities.interface';
import { DatasourceService} from '../services/datasource.service';

@Injectable()
export class CityRepository{
    private cities = [];
    private cityNames: string [] = [];


    constructor(private dataSource: DatasourceService){
        dataSource.getDataDump().subscribe(data => {
          this.cities= data.map(c => c.city);
           console.log(data)
        }, e => console.log('Something happened ' + e), () => console.log('Completed') );
    }

    getData() {
        console.log(this.cities);
        return this.cities.map(c => c.city);
    }
}