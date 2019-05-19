import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { }  from '@angular/material';
import { PicturesService } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-show-map-window',
  templateUrl: './show-map-window.component.html',
  styleUrls: ['./show-map-window.component.css']
})
export class ShowMapWindowComponent implements OnInit {

  selectedFile: File;

  options:string[]=['lalala','sds'];

  constructor(
    public pictureService:PicturesService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    this.pictureService.uploadImage(this.selectedFile);
  }

}
