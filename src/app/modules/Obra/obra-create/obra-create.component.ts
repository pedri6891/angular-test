import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ObraService} from "../../../services/obra/obra.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-obra-create',
  templateUrl: './obra-create.component.html',
  styleUrls: ['./obra-create.component.scss']
})
export class ObraCreateComponent implements OnInit {

  private obra: FormGroup;
  private submitted = false;

  constructor(private formBuilder: FormBuilder,
              private obraServce: ObraService,
              private route:Router) { }

  ngOnInit() {

    this.obra = this.formBuilder.group({
      nombre:['', Validators.required],
      annoinicio:['', Validators.required],
      annofin:['', Validators.required],
      montoinversion:['', Validators.required],
      longitud:['', Validators.required],
      transitodiarioestimado:['', Validators.required],
      tiempotrasladoanterior:['', Validators.required],
      tiempotrasladoactual:['', Validators.required],
      fechaentrega:[''],
    })
  }

  get f(){
    return this.obra.controls;
  }

  save(){

    this.submitted = true;
    let record  = {...this.obra.value}
    this.obraServce.Create(record).subscribe(res=>{
        if(res && !res.error){
            this.route.navigate(['/obras']);
        }
    })
  }

}
