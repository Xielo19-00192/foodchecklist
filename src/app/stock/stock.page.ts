import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
note='There are no items here' ;
showData($event: any){ 
  console.log("button is clicked!"); if($event) { 
     console.log($event.target); 
     console.log($event.target.value); 
  } 
} 
}
