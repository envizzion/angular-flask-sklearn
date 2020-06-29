import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ViewPredictionComponent } from './components/view-prediction/view-prediction.component';


const routes: Routes = [
  { path: '', redirectTo: 'prediction', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddDataComponent },
  { path: 'prediction', component: ViewPredictionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
