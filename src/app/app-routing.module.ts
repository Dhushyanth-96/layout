import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './layout/simple-layout/simple-component/simple-component.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path:'', redirectTo:'auth/signin', pathMatch: 'full'
  },
  {
    path:'',
    component:SimpleComponent,
    children: [
      {
        path:'auth',
        loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path:'',
    component:DashboardLayoutComponent,
    children: [
      {
        path:'dashboard',
        loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
