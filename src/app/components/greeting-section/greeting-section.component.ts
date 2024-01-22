import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting-section',
  templateUrl: './greeting-section.component.html',
  styleUrls: ['./greeting-section.component.css']
})
export class GreetingSectionComponent {
  greetingPhrase = "Capture every event! \n Create unforgettable moments!"
  greetingImgPath = "assets/greeting-nernet.jpg"
}
