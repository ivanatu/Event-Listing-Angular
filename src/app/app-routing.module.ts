import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-event' },
  { path: 'create-event', component: EventCreateComponent },
  { path: 'edit-event/:id', component: EventEditComponent },
  { path: 'event-list', component: EventListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }