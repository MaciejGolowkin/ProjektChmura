import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { }  from '@angular/material';
import { PicturesService } from 'src/app/services/pictures.service';
import { MarkerServiceService } from 'src/app/services/marker-service.service';
import { MarkerTag } from 'src/Classes/marker';


@Component({
  selector: 'app-show-map-window',
  templateUrl: './show-map-window.component.html',
  styleUrls: ['./show-map-window.component.css']
})
export class ShowMapWindowComponent implements OnInit {

  selectedFile: File;

  marker:MarkerTag;

  tag:string;

  description:string;

  options:string[]=['lalala','sds'];

  constructor(
    public pictureService:PicturesService,
    public markerService:MarkerServiceService,
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

  createtag()
  {
    this.markerService.marker.tag=this.tag;
    this.markerService.marker.description=this.description;
    this.markerService.addActiveToList();
    console.log(this.markerService);
  }

  cancel()
  {
    this.markerService.makeInactiveMarker();
  }

}
