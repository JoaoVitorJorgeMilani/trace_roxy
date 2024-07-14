import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    // children: [
    //   {
    //     path: '',
    //     component: HomeMenuComponent
    //   },
    //   {
    //     path: 'about',
    //     component: HomeAboutComponent
    //   }
    // ]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
