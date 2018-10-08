import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appchild',
  templateUrl: './appchild.component.html',
  styleUrls: ['./appchild.component.css']
})
export class AppchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
handleclick(){
  console.log('hey I am clicked in child');
}
}
