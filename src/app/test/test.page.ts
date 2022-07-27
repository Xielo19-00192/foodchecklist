import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage {
notes =[];
  constructor( private dataService: DataService) { 
    this.dataService.getNotes().subscribe(res =>{
      console.log(res);
      this.notes = res;
     
      
    })
  }


}
