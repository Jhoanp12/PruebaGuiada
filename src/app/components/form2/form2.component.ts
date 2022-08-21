import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
registrarCurso : FormGroup;
submitted = false;
cursos = Array();

  constructor(private fb:FormBuilder) {
    this.registrarCurso = this.fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      duracion:['',Validators.required],
      costo:['',Validators.required]
    })
    this.cursos = [{nombre:'Java', descripcion:'Curso Nivel I', duracion:24 ,costo:15 },
  {nombre:'Oracle', descripcion:'Curso Nivel I', duracion:24 ,costo:12},
  {nombre:'PHP', descripcion:'Curso Nivel I', duracion:24 ,costo:10},
  {nombre:'Java2', descripcion:'Curso Nivel II', duracion:42 ,costo:18}]
  }


  ngOnInit(): void {
  }
  cantCursos(){
    return this.cursos.length>0;
  }
  ingresarCurso(){
    for(let x=0;x<this.cursos.length;x++){
      if(this.cursos[x].nombre==this.registrarCurso.value.nombre){
        alert('El curso ya esta registrado')
        return;
      }
    }
    this.submitted = true;
    if (this.registrarCurso.invalid){
      return
    }
    const newCurso: any = {
      nombre:this.registrarCurso.value.nombre,
      descripcion:this.registrarCurso.value.descripcion,
      duracion:this.registrarCurso.value.duracion,
      costo:this.registrarCurso.value.costo
    }
    this.cursos.push(newCurso)
    this.registrarCurso.value.nombre = ''
    this.registrarCurso.value.descripcion = ''
    this.registrarCurso.value.duracion = 0
    this.registrarCurso.value.costo = 0
  }
  selectCurso(registrarCurso){
    this.registrarCurso.value.nombre = registrarCurso.nombre;
    this.registrarCurso.value.descripcion = registrarCurso.descripcion;
    this.registrarCurso.value.duracion = registrarCurso.duracion;
    this.registrarCurso.value.costo = registrarCurso.costo;
  }
  borrarCurso(registrarCurso){
    for(let i=0;i<this.cursos.length;i++){
      if(this.cursos[i].nombre==this.registrarCurso.value.nombre){
        this.cursos.splice(i,1);
        return;
        }
    }
  }
}
