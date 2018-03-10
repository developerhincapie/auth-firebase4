import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPostsPage } from './detail-posts';

@NgModule({
  declarations: [
    DetailPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPostsPage),
  ],
})
export class DetailPostsPageModule {}
