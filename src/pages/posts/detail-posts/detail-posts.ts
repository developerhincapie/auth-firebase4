import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ApiServicerovider } from '../../../providers/service-call/api-service';

@IonicPage()
@Component({
  selector: 'page-detail-posts',
  templateUrl: 'detail-posts.html',
})
export class DetailPostsPage {

  itemDetail: any;

  constructor(
    public _apiServicerovider: ApiServicerovider,
    public navParams: NavParams) { }

  ionViewDidLoad() {
    this.getData();
  }

  /*METHOD OR FUNCTION TO CALL THE API SERVICE TO BRING THE DATA ACCORDING TO THE ID.*/
  getData(): void {
    if (this.navParams.get('id')) {
      this._apiServicerovider.getDataxId(this.navParams.get('id'))
        .subscribe(response => {
          this.itemDetail = response;
        });
    }
  }

}
