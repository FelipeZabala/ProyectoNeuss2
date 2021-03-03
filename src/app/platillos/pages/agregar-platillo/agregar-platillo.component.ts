import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platillo } from '../../interfaces/platillos.interface';
import { PlatillosService } from '../../services/platillos.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar-platillo',
  templateUrl: './agregar-platillo.component.html',
  styles: [
  ]
})
export class AgregarPlatilloComponent implements OnInit {

  platillo: Platillo = {
    idCourse: 0,
    Name: '',
    Stock: 0,
    Price: 0,
    Description: '',
    Img: ''

  }

  constructor( private platillosService: PlatillosService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({idCourse}) => this.platillosService.getPlatilloPorId( idCourse ) )
      )
      .subscribe( platillo => this.platillo = platillo );

  }

  guardar(){
    if(this.platillo.Name.trim().length === 0 ){
      return;
    }
    if(this.platillo.Description.trim().length === 0 ){
      return;
    }
    if(this.platillo.Img.trim().length === 0 ){
      return;
    }

   // this.platillosService.agregarPlatillo( this.platillo )
   //   .subscribe( resp =>{
   //     console.log('Respuesta', resp)
   //   })

  }

}
