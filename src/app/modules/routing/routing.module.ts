import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from 'src/app/components/groups/groups.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

const routes: Routes = [
  { path: 'app-groups-link', component: GroupsComponent },
  { path: 'app-footer-link', component: FooterComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
