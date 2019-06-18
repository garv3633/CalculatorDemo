import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input()
  resultsArr: Result[] = []

  @Output()
  singleResultClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  resultClick(result){
    this.singleResultClick.emit(result)
  }
}
