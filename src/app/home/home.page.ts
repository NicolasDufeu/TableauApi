import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http:HttpClient) {}
    
    CapitalArray= [];

     ngOnInit(){
        const URL1 = 'https://restcountries.eu/rest/v2/alpha/col';
        const URL2 = 'https://restcountries.eu/rest/v2/alpha/fra';
        const URL3 = 'https://restcountries.eu/rest/v2/alpha/usa'; 
         
        this.http.get(URL1).subscribe( (data1) => {
            this.CapitalArray.push(data1.capital);
            console.log('data 1 : ',data1);
        })
        this.http.get(URL2).subscribe( (data2) => {
            this.CapitalArray.push(data2.capital);
            console.log('data 2 : ',data2);
        })
        this.http.get(URL3).subscribe( (data3) => {
            this.CapitalArray.push(data3.capital);
            console.log('data 3 : ',data3);
        })
         

    }
    
    ionViewWillEnter(){
        
    }

}
