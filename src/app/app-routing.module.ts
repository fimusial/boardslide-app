import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { BoardOverviewComponent } from './board-overview/board-overview.component';
import { NothingHereComponent } from './nothing-here/nothing-here.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'board/:id', component: BoardOverviewComponent },
  { path: '**', component: NothingHereComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
