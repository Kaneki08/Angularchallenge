import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularChallenge';
  textToChange="Text to change"
  hobbyArray = ["play Call Of Duty", "Play Minecraft", "Watch Anime"];
}

