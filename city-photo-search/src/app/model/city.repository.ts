import {Injectable} from "@angular/core";
import { City} from './cities.interface';
import { DatasourceService} from '../services/datasource.service';
import { Observable } from 'rxjs';

@Injectable()

/* this class is used to hide (to some extent) the end points that we are accessing our data from */

export class CityRepository {

    constructor(private dataSource: DatasourceService) { }

    getData(): Observable<City[]> {
        return this.dataSource.getCitites();
    }
}