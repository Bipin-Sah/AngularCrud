import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'Mosh Courses';
  // imageUrl= 'https://dummyimage.com/600x400/000/00ffd5.png';
  // colSpan=2;
  // isActive= true;
  email = "me@example.com";

  constructor() { }

  // onDivClicked() {
  //   console.log('div was clicked');
  // }

// onSave($event){
//   $event.stopPropagation();
//   console.log('Button was clicked', $event);
// }

//   onkeyPress(){
//     console.log('Enter was pressed !');
//   }

// onKeyUp($event){
//   console.log($event.target.value);
// }

// onPress(email){
//   console.log(email);
// }

// onKePress(){
//   console.log(this.email);
// }

}
