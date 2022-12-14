import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';
import { ErrorsService } from 'src/app/services/errors.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notyf = new Notyf({
    duration: 4000,
    ripple: true,
    position: { x: 'left', y: 'bottom' },
  });

  public constructor(private myErrorsService: ErrorsService) {}

  public error(err: any): void {
    this.notyf.error(this.myErrorsService.getError(err));
  }
}
