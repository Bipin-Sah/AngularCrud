import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ExamPipeComponent } from './exam-pipe/exam-pipe.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CounterComponent } from './counter/counter.component';
import { ReUsableComponent } from './re-usable/re-usable.component';
import { AppchildComponent } from './appchild/appchild.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ExamPipeComponent,
    SummaryPipe,
    FavoriteComponent,
    CounterComponent,
    ReUsableComponent,
    AppchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
