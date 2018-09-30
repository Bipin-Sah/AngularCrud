import { Component } from '@angular/core';

@Component({
  selector: 'exam-pipe',
  templateUrl: './exam-pipe.component.html',
  styleUrls: ['./exam-pipe.component.css']
})
export class ExamPipeComponent{
  course = {
    title: "The Complete Angular Courses. Use modern web platform capabilities to deliver app-like experiences. High performance, offline, and zero-step installation.",
    rating:4.9745,
    students: 301233456,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }
  

}
