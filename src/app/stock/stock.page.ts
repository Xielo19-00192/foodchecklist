import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage  {
  notes= [];

  constructor(private router: Router, private dataService: DataService) { 
    this.dataService.getNotes().subscribe(res =>{
      console.log(res);
      this.notes = res;
     
      
    })

  }
  


btnClick1= function () {
  this.router.navigateByUrl('/stock');
};
btnClick2= function () {
  this.router.navigateByUrl('/shoppinglist');
};
btnClick3= function () {
  this.router.navigateByUrl('/expiry');
};


}
