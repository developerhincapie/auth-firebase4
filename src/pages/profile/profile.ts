import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  fileImage: any = null;
  message: string = 'No picture taken.';

  constructor(private camera: Camera) { }

  ionViewDidLoad() { }

  /*ETHOD TO OPEN THE CAMERA PLUGIN OF THE DEVICE,
   THIS IN HIS TIME HAS SOME PROPERTIES LIKE THE SAVED IN THE ALBUM,
    THE ORIENTATION OF THE CAMERA, THE DESTINY AMONG OTHERS.*/
  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }
    this.camera.getPicture(options)
      .then((imageData) => {
        this.fileImage = imageData;
        this.message = '';
      }).catch(error => {
        this.fileImage = null;
        this.message = 'No picture taken.';
      });
  }




}
