import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage  {

 
  constructor(private router: Router) {

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
