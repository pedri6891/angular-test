import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-obra-detail',
  templateUrl: './obra-detail.component.html',
  styleUrls: ['./obra-detail.component.scss']
})
export class ObraDetailComponent implements OnInit {

  @Input() obra: Object;
  constructor() { }

  ngOnInit() {

  }

}
