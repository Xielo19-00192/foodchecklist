import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.page.html',
  styleUrls: ['./shoppinglist.page.scss'],
})
export class ShoppinglistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  note='There are no items here' ;
  showData($event: any){ 
    console.log("button is clicked!"); if($event) { 
       console.log($event.target); 
       console.log($event.target.value); 
    }
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