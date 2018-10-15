import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
 @Input('isFavorite') isSelected : boolean;
 @Input() placeholder: string;
 @Input() type: string;
 @Input() autocomplete: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = ! this.isSelected;
  }
}
