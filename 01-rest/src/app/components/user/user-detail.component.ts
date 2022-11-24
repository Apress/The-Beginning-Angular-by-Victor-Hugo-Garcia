import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private reqresService: ReqresService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      reqresService.getUser(params ['id'])
        .subscribe((res: User) => this.user = res);
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    this.reqresService.updateUser(this.user)
      .subscribe(() => this.router.navigate( ['users'] ));
  }

}

