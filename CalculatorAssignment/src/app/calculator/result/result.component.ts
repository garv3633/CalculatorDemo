import { Component, OnInit, Input } from '@angular/core';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input('resultsArr')
  results: Result[] = []

  constructor() { }

  ngOnInit() {
  }

}
