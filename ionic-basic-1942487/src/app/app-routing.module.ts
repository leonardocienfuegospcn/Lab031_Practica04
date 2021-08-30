import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'alumno',
    pathMatch: 'full'
  },
  {
    path: 'alumno',
    children: [
      {
        path:'',
        loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule)
  
      },
      {
        path:':idAlumno',
        loadChildren: () => import('./alumno/detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
