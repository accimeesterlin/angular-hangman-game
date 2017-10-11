import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StorageService} from './storage/storage.service';




import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ScoreComponent } from './score/score.component';
import { CharacterComponent } from './character/character.component';
import { TopicComponent } from './topic/topic.component';
import { GameComponent } from './game/game.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainappComponent } from './mainapp/mainapp.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ScoreComponent,
    CharacterComponent,
    TopicComponent,
    GameComponent,
    FooterComponent,
    HeaderComponent,
    MainappComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
