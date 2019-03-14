import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  isLoading: Observable<boolean>;

  constructor(private snackbar: MatSnackBar) { }

  showSnackbar(message: string, action: any, duration: number): void {
    this.snackbar.open(message, action, {
      duration: duration
    });
  }

}
