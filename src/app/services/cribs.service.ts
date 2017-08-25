import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CribsService {

  public newCribSubject= new Subject<any>();
  constructor(private http: Http) { }

  getAllCribs() {
  return this.http.get('data/cribs.json').map(res => res.json()); // to map the response to json.
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}
