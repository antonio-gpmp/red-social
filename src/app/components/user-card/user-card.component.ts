import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user: any = {};
  @Input() index: number | undefined;

  @Output() selectedUser: EventEmitter<number> | undefined;

  constructor(private router: Router) {
    this.selectedUser = new EventEmitter();
  }

  ngOnInit() {
  }

  showUser() {
    this.router.navigate( ['/usuario', this.index] );
  }


}
