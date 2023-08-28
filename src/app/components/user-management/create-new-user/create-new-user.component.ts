import { Component, Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/share/services/user.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent {
  @Output() onBack = new EventEmitter<string>();
  userPofileForm : FormGroup;
  

  constructor(
    private service: UserService,
    private fb: FormBuilder
  ){}
  ngOnInit() {
    this.userPofileForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
    });
  }
  addNewUser(form: FormGroup) {
    this.service.addUser(form.value);
    this.onBack.emit();
  }
  onClickBackUser(){
    this.onBack.emit();
  }

}
