import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule { }
