import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { TempDataService } from '../service/temp-data.service';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.css']
})
export class DisplayQuizComponent implements OnInit {

  quiz : Quiz;
  
  constructor( private tempData : TempDataService ) { }

  ngOnInit() {

    this.quiz = this.tempData.getQuiz();

  }

}
