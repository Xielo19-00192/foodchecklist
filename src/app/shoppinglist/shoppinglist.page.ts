import { ChangeDetectorRef, Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Note } from '../services/data.service';
import { CreatePage } from '../create/create.page';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.page.html',
  styleUrls: ['./shoppinglist.page.scss'],
})
export class ShoppinglistPage  {
  notes: Note[] = [];
  constructor(private router: Router,  private cd: ChangeDetectorRef,private dataService: DataService,private alertCtrl: AlertController,private modalCtrl: ModalController) { 
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;
      this.cd.detectChanges();
    
    });
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
async addNote() {
  const alert = await this.alertCtrl.create({
    header: 'Add Note',
    inputs: [
      {
        name: 'productName',
        placeholder: 'Enter product name',
        type: 'text'
      },
      {
        name: 'quantity',
        placeholder: 'Enter Quantity',
        type: 'number'
      }
  
  
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Add',
        handler: res => {
          this.dataService.addNote({ quantity: res.quantity, productName: res.productName });
        }
      }
    ]
  });

  await alert.present();
}


async openNote(note: Note) {
  const modal = await this.modalCtrl.create({
    component: CreatePage,
    componentProps: { id: note.id },
    breakpoints: [0, 0.5, 0.8],
    initialBreakpoint: 0.8
  });

  await modal.present();
}


}
