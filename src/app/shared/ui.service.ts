import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  isLoadingSubj = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) { }

  showSnackbar(message: string, action: any, duration: number): void {
    this.snackbar.open(message, action, {
      duration: duration
    });
  }

}
