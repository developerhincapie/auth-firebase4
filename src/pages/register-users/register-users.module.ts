import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterUsersPage } from './register-users';

@NgModule({
  declarations: [
    RegisterUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterUsersPage),
  ],
})
export class RegisterUsersPageModule {}
