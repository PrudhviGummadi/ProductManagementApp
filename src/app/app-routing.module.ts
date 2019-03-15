import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'},
      {path:'**',component:WelcomeComponent}
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
