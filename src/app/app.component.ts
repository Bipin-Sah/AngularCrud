import { Component } from '@angular/core';

interface FavoriteChangedEventArgs {
  newValue: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular'
  post= {
    title: 'Bipin',
    isFavorite: false
  }

  // onFavpriteChanged() {
  //   console.log('Favorite has clicked:');
  // }

  // onFavpriteChanged(isFavorite) {
  //   console.log('Favorite has clicked:',isFavorite);
  // }

// onFavpriteChanged(eventArgs) {
//     console.log('Favorite has clicked:',eventArgs);
//   }

// onFavpriteChanged(eventArgs:{newValue: boolean}) {
  onFavpriteChanged(eventArgs: FavoriteChangedEventArgs) {
  console.log('Favorite has clicked:',eventArgs);
}
}
