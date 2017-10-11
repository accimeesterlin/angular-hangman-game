import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {StorageService} from "../storage/storage.service"

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('openModal') openModal:ElementRef;

  constructor(private service: StorageService) { }

  ngOnInit() {
    // this.openModal.nativeElement.click();
  }

}
