import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService, Note } from '../services/data.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  @Input() id: string;
  note: Note = null;
 
  constructor(private dataService: DataService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }
 
  ngOnInit() {
    this.dataService.getNoteById(this.id).subscribe(res => {
      this.note = res;
    });
  }
 
  async deleteNote() {
    await this.dataService.deleteNote(this.note)
    this.modalCtrl.dismiss();
  }
 
  async updateNote() {
    await this.dataService.updateNote(this.note);
    const toast = await this.toastCtrl.create({
      message: 'Note updated!.',
      duration: 2000
    });
    toast.present();
 
  }
}