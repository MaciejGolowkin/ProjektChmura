import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  IMAGES =[
    {"id":1, "category": "krajobraz", "caption": "View from the boat", "url":"assets/img/1.jpg"},
    {"id":2, "category": "architektura", "caption": "Sailing the coast", "url":"assets/img/zyg.jpg"},
    {"id":3, "category": "architektura", "caption": "The water was nice", "url":"assets/img/2.jpg"},
    {"id":4, "category": "krajobraz", "caption": "Cool water cavern", "url":"assets/img/3.jpg"},
    {"id":5, "category": "architektura", "caption": "Sunset at the docks", "url":"assets/img/4.jpg"},
    {"id":6, "category": "architektura", "caption": "Camping Trip '17'", "url":"assets/img/5.jpg"},
    {"id":7, "category": "architektura", "caption": "Kim and Jessie", "url":"assets/img/6.jpg"},
    {"id":8, "category": "krajobraz", "caption": "View from the top", "url":"assets/img/7.jpg"},
    {"id":9, "category": "architektura", "caption": "On the trail", "url":"assets/img/8.jpg"},
    {"id":10, "category": "architektura", "caption": "Our camping spot", "url":"assets/img/9.jpg"},
    {"id":11, "category": "architektura", "caption": "RV Life", "url":"assets/img/koloseum.jpg"},
    {"id":12, "category": "camping", "caption": "Hiking trip 2017", "url":"assets/img/szwajcaria.jpg"},
    {"id":13, "category": "library", "caption": "Big library", "url":"assets/img/wlochy.jpg"}

  ]
  visibleImages = [];

  visible:File;

  getImages(){
      return this.visibleImages = this.IMAGES.slice(0);
  }

  getImage(id: number){
      return this.IMAGES.slice(0).find(image => image.id == id)
  }

  uploadImage(image: File)
  {
    console.log("zadzialalo");
    this.visibleImages.push(image);
  }

}
