import { Component } from '@angular/core';
import { ToastService } from 'src/app/share/services/toast.service';
import { Toast } from 'src/app/share/models/toast.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  toasts: any;

  constructor(public toastService: ToastService) {
    toastService.toasts$
      .subscribe(toasts => this.toasts = toasts);
  }

  remove(index: number) {
    this.toastService.remove(index);
  }
  /* Example code for Toast success, failer */
  /* 
  showSuccessToaster() {
    this.toastService.add({
      type: 'success',
      title: 'Well done!',
      message: 'This is a success alert',
    });
  }
  showErrorToaster() {
    this.toastService.add({
      type: 'error',
      title: 'Check it out!',
      message: 'This is a error alert',
    });
  }
  showWarningToaster() {
    this.toastService.add({
      type: 'warning',
      title: 'Check it out!',
      message: 'This is a warning alert',
    });
  }*/ 
}
