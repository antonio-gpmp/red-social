import { Component, OnInit } from "@angular/core";
import { Users } from "../models/users.model";
import { UsersService } from "../../services/users.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users: Users[] = [];

  constructor(
    private _usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.activatedRoute.data.subscribe(({ users }) => {
      this.users = users;
    });
  }

  showUser(idx: number) {
    console.log('users');
    
    this.router.navigate(["/usuario", idx]);
  }
}
