import { Component } from '@angular/core';
import { DataService, Note } from '../services/data.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage {
  notes: Note[] = [];
 
  constructor(private dataService: DataService,private alertCtrl: AlertController) {
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;
    
    });
  }
  
}
