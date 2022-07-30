"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var firestore_1 = require("@angular/fire/firestore");
var firestore_2 = require("firebase/firestore");
var DataService = /** @class */ (function () {
    function DataService(firestore) {
        this.firestore = firestore;
    }
    DataService.prototype.getNotes = function () {
        var notesRef = firestore_1.collection(this.firestore, 'notes');
        return firestore_1.collectionData(notesRef, { idField: 'id' });
    };
    DataService.prototype.getNoteById = function (id) {
        var noteDocRef = firestore_2.doc(this.firestore, "notes/" + id);
        return firestore_1.docData(noteDocRef, { idField: 'id' });
    };
    DataService.prototype.addNote = function (note) {
        var notesRef = firestore_1.collection(this.firestore, 'notes');
        return firestore_1.addDoc(notesRef, note);
    };
    DataService.prototype.deleteNote = function (note) {
        var noteDocRef = firestore_2.doc(this.firestore, "notes/" + note.id);
        return firestore_1.deleteDoc(noteDocRef);
    };
    DataService.prototype.updateNote = function (note) {
        var noteDocRef = firestore_2.doc(this.firestore, "notes/" + note.id);
        return firestore_1.updateDoc(noteDocRef, { productName: note.productName, quantity: note.quantity });
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
