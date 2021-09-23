import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css']
})
export class BreadcrumComponent implements OnInit {

  constructor() { } 
  ngOnInit(): void {
  }
  @Input() name : string;

  @Output() checkthepage = new EventEmitter<string>();
  pagenamevalue(currentpage){
    this.checkthepage.emit(currentpage);
  }

}
