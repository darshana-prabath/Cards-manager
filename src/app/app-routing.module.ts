import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  { path:'cards', component: CardComponent },
  { path:'cars', component:CarsComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
