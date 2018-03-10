import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiServicerovider } from '../../providers/service-call/api-service';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  items: Array<any>;

  constructor(
    public _apiServicerovider: ApiServicerovider,
    public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.getData();
  }

  /*METHOD OR FUNCTION TO CALL THE API SERVICE TO BRING ALL THE DATA.*/
  getData(): void {
    this._apiServicerovider.getAllData()
      .subscribe((response: any) => this.items = response);
  }

  /*GO TO THE FOLLOWING DETAIL PAGE BY SELECTED ELEMENT ID*/
  detailPush(id) {
    this.navCtrl.push('DetailPostsPage', { id: id });
  }

}
