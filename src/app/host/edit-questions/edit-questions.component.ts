import { Component, OnInit } from '@angular/core';


interface Timer {
  value: number;
}

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})

export class EditQuestionsComponent implements OnInit {

  timers: Timer[] = [
    {value: 5},
    {value: 10},
    {value: 15},
    {value: 20},
    {value: 25},
    {value: 30}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
