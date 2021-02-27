import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPlatilloComponent } from './pages/agregar-platillo/agregar-platillo.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaPlatillosComponent } from './pages/lista-platillos/lista-platillos.component';
import { PlatilloComponent } from './pages/platillo/platillo.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'listado', component: ListaPlatillosComponent},
      {path: 'agregar', component: AgregarPlatilloComponent},
      {path: 'editar/:id', component: AgregarPlatilloComponent},
      {path: ':id', component: PlatilloComponent},
      {path: '**', redirectTo: 'listado'}
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild ( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class PlatillosRoutingModule { }
