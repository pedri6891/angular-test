import { Component, OnInit } from '@angular/core';
import {ObraService} from "../../../services/obra/obra.service";
import {Router} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.scss']
})
export class ObraListComponent implements OnInit {

  private obras:[];
  private myObra= null;
  private dateFormat = moment();


  constructor(private obraService: ObraService, private route: Router) { }

   ngOnInit() {

      this.obraService.List().subscribe(data=>{
        this.obras = data.data;
      });

  }
  addButtonClick(){
    this.route.navigate(['/obras/create'])
  }
  showDetails(id){
    this.obraService.Get(id).subscribe(res=>{

       if(res && !res.error){
         this.myObra = {...res.data};
       }
    })
  }
  closeDetails(){
    this.myObra = null;
  }
}
