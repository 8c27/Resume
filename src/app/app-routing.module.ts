import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from 'src/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch:'full'},
  { path: '', component: AdminLayoutComponent, children: [{
    path: '', loadChildren: () => import('src/layouts/admin-layout/admin-layout.module').then( m => m.AdminLayoutModule)
  }]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [

  ]
})
export class AppRoutingModule { }
