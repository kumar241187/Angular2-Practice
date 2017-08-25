import { Component, OnInit } from '@angular/core';
 // when you import ts no need to specify the extention.
import { Http } from '@angular/http';


import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>; // to get real estate data from cribs.ts
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<String>= ['address', 'area', 'bathrooms', 'bedrooms', 'price', 'type'];

  // when ever you want to access any particular module, you have to inject it into ur constructor.
  constructor(private http: Http, private cribsService: CribsService, private utilService: UtilService) { }

  ngOnInit() {
    /* this.http.get('data/cribs.json').map(res => res.json()) // to map the response to json.
      .subscribe(data => this.cribs = data,
      error => this.error = error.statusText);*/

    // Above request is being done at services as services can be reusable.

    this.cribsService.getAllCribs().subscribe(data => this.cribs = data,
      error => this.error = error.statusText);

    this.cribsService.newCribSubject.subscribe(
      data => this.cribs.push(data)
      // suppose if you want the new entry to be at beginning spread the data
      //  data => this.cribs = [data, ...this.cribs]

      // i.e you are modifying the cribs and assigning it to new cribs with the entered data.
    );
  }

}
