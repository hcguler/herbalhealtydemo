import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('../component/home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('../component/about/about.module').then(m => m.AboutModule) },
      { path: 'faq', loadChildren: () => import('../component/faq/faq.module').then(m => m.FaqModule) },
      { path: 'contact', loadChildren: () => import('../component/contact/contact.module').then(m => m.ContactModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
