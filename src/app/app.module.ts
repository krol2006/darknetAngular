import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LangsmenuComponent } from './blocks/header/langsmenu.component';
import { MainmenuComponent } from './blocks/header/mainmenu.component';
import { PanelComponent } from './blocks/header/panel.component';
import { HomeComponent } from './home.component';
import { SliderComponent } from './blocks/content/slider.component';
import { InfoComponent } from './blocks/content/info.component';
import { FaqComponent } from './blocks/content/faq.component';
import { GamesmenuComponent } from './blocks/content/gamesmenu.component';
import { GamesoptionsComponent } from './blocks/content/gamesoptions.component';
import { GamesComponent } from './blocks/content/games.component';
import { GamedetailComponent } from './blocks/content/game-detail.component';
import { WaitComponent } from './blocks/content/wait.component';
import { WinnersComponent } from './blocks/content/winners.component';
import { FootermenuComponent} from './blocks/footer/footermenu.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'info', component: InfoComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'game/:id', component: GamedetailComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    LangsmenuComponent,
    MainmenuComponent,
    PanelComponent,
    HomeComponent,
    SliderComponent,
    InfoComponent,
    FaqComponent,
    GamesmenuComponent,
    GamesoptionsComponent,
    GamesComponent,
    GamedetailComponent,
    WaitComponent,
    WinnersComponent,
    FootermenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
