import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private reqresService: ReqresService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get f(): any { return this.userForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.userForm.invalid) {
        return;
    }

    const avatar = 'assets/img/user.jpg';

    const first_name: string = this.f.first_name.value;

    const last_name: string = this.f.last_name.value;

    this.reqresService.addUser( { first_name, last_name, avatar } as User )
      .subscribe(() => this.router.navigate( ['users'] ));
  }

}
