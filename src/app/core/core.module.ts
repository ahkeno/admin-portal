import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
// 
import { LoginPage } from '../modules/login/login.page';

@NgModule({
    imports: [],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
        ],
    declarations: [],
    providers: []
})

export class CoreModule {}
