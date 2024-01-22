import { Component, Input } from '@angular/core';
import { IGroup } from 'src/app/models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  @Input() group: IGroup;

  details : boolean = false;

}
