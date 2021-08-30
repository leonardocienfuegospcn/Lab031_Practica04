import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.model'
import { AlumnosService } from './alumnos.service';
import { Personaje } from './personajes.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  alumnos: Alumno[];
  personajes: Personaje[];
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.alumnos = this.alumnosService.getAlumnos();
    this.alumnosService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
      console.log(response);
    });
  }
  
  ionViewWillEnter(){
    this.alumnos = this.alumnosService.getAlumnos();
  }
}
