import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expiry',
  templateUrl: './expiry.page.html',
  styleUrls: ['./expiry.page.scss'],
})
export class ExpiryPage implements OnInit {

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
