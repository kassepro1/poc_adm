import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpecialityComponent} from "./speciality/speciality.component";

const routes: Routes = [
  {path: 'speciality', component: SpecialityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
