import { Component,Input,Output } from '@angular/core';
import { Router} from "@angular/router";
import { CoreModule } from 'src/app/core/core.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: true,
    imports: [CoreModule]
  })
  export class LoginPage {
    hide = true;
    constructor(
        private router: Router
    ){}
    ngOnInit() {}
    onLogin(){
        this.router.navigate(['/dashboard']);

    }
  }