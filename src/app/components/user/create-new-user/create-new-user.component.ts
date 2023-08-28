import { Component, Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/share/services/user.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";


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
      name: new FormControl('Sammy'),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  addNewUser(form: FormGroup) {
    debugger;
    this.service.addUser(form.value);
    //window.alert('Your product has been added to the cart!');
  }
  onClickBackUser(){
    this.onBack.emit();
  }

}
