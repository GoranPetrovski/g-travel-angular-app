import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CreateItemComponent} from './create-item/create-item.component';
import {AppConfig} from './config/app.config';
//import {Error404Component} from './core/error404/error-404.component';

const routes: Routes = [
  {path: '', redirectTo: '/create', pathMatch: 'full'},
  {path: 'create', component: CreateItemComponent},
  {path: 'travels', component: CreateItemComponent},
  //{path: AppConfig.routes.heroes, loadChildren: './heroes/heroes.module#HeroesModule'},
  //{path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}