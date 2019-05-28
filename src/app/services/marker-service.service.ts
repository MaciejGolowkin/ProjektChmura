import { Injectable } from '@angular/core';
import { MarkerTag } from 'src/Classes/marker';


@Injectable({
  providedIn: 'root'
})
export class MarkerServiceService {

  constructor() { 

  }

  markers:MarkerTag[]=[];

  marker:MarkerTag= new MarkerTag();


  public addMarker(marker:MarkerTag)
  {
    this.markers.push(marker);

  }

  public getMarkers()
  {
    return this.markers;
  }

  public setActiveMarker(long:number, lat:number)
  {
    this.marker.longitude=0;
    this.marker.latitude=0;

    this.marker.longitude= long;
    this.marker.latitude=lat;


  }

  public addActiveToList()
  {
    console.log
    this.markers.push(this.marker);
    console.log("Marker przed dodaniem do listy",this.markers);
    console.log("Markery:",this.markers);
  }

  public makeInactiveMarker()
  {
    this.marker=null;
  }

  public getActiveMarker()
  {
    return this.marker;
  }

}
