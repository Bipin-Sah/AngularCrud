import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-re-usable',
  templateUrl: './re-usable.component.html',
  styleUrls: ['./re-usable.component.css']
})
export class ReUsableComponent implements OnInit {
//  @Input() isFavorite: boolean;
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter () ;

  constructor() { }

  ngOnInit() {
  }

  onFavoriteClick(){
    //this.isFavorite = !this.isFavorite ;
    this. isSelected = !this. isSelected ;
    //this.change.emit();
    // this.change.emit(this.isSelected);
    this.change.emit({newValue: this.isSelected});
  }

}
