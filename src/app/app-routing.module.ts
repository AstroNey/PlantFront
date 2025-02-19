import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlantPageComponent} from './plant-page/plant-page.component';
import {PlantListPageComponent} from './plant-list-page/plant-list-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'plants/:id', component: PlantPageComponent },
    { path: 'plants', component: PlantListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
