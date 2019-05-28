
import { Component, OnInit } from '@angular/core';


import { google, Marker } from '@agm/core/services/google-maps-types';
import { ShowMapWindowComponent } from '../show-map-window/show-map-window.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MarkerServiceService } from 'src/app/services/marker-service.service';
import { MarkerTag } from 'src/Classes/marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  isDeletable:boolean=false;
  isAddOn=true;
  
  task:string="Modify";
  

  title = 'ProjektChmura';
   lat: number = 51.678418;
   lng: number = 7.809007;
  selectedMarker;

  // markers = [
  //   // These are all just random coordinates from https://www.random.org/geographic-coordinates/
  //   { lat: 22.33159, lng: 105.63233, alpha: 1 },
  //   { lat: 7.92658, lng: -12.05228, alpha: 1 },
  //   { lat: 48.75606, lng: -118.859, alpha: 1 },
  //   { lat: 5.19334, lng: -67.03352, alpha: 1 },
  //   { lat: 12.09407, lng: 26.31618, alpha: 1 },
  //   { lat: 47.92393, lng: 78.58339, alpha: 1 }
  // ];

  markers:MarkerTag[]=[] ;

  constructor(
    private modalService: NgbModal, private markerService:MarkerServiceService
  ) { 
    
  }

  ngOnInit() {
    this.markers=this.markerService.markers;
  }

  Remove()
  {
    this.task="Remove";
    this.isDeletable=true;
    this.isAddOn=false;
  }

  Modify()
  {
    this.task="Modify";
  }

  Add()
  {
    this.task="Add";
    this.isDeletable=false;
    this.isAddOn=true;
  }

  addMarker(lat: number, lng: number) {
    if(this.task=="Add") 
      {
        this.markerService.marker.latitude=lat;
        this.markerService.marker.longitude=lng;
      //this.markers.push({ lat, lng, alpha: 0.4 }); 
      this.openFormModal();}
    
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }


  selectMarker(event) {

    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
      
    };
    //  this.lat=event.latitude;
    //  this.lng=event.longitude;


   if(this.task=="Remove") 
      for( var i = 0; i < this.markers.length; i++){ 
      
      let markerItem= this.markers[i];

      if ( markerItem.latitude == this.selectedMarker.lat && markerItem == this.selectedMarker.lng ) {
        this.markers.splice(i, 1); 
      }
   }
   
   

  }

  openFormModal() {
    const modalRef = this.modalService.open(ShowMapWindowComponent);
    
    //this.markerService.setActiveMarker(this.lng,this.lat);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
