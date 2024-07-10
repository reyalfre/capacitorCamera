import { Component } from '@angular/core';
import {Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageSource:any;
  constructor(private DomSanitizer:DomSanitizer) {}
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source:CameraSource.Prompt,
      saveToGallery:true
    });
  //  this.imageSource='data:image/jpeg;base64,' + image.base64String;

   // console.log(this.imageSource)
   this.imageSource=this.DomSanitizer.bypassSecurityTrustUrl(image.webPath ? image.webPath : "")
}
getPhoto(){
  return this.imageSource
}
}