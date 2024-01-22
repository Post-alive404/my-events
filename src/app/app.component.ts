import { Component } from '@angular/core';
import { IGroup } from './models/group';
import { groups as data } from './data/groups';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-events';
  titelGroup = "my groups";

  groups: IGroup[] = data;
}
