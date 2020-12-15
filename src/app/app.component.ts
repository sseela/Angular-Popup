
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  'use strict'
  /* title = 'DemoPopup';
  bool:boolean = true;
  num: number = 20;
  list: string[] = ['one', 'two', 'three'];
  dialogRef: MatDialogRef<PopupComponent, string>; */
 s='sandeep';
  
  constructor(private dialog: MatDialog) {
    
  }

  ngOnInit() {
    
    /* this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); 
    }); */
  }

  /* openPopup(){
    this.dialogRef = this.dialog.open(PopupComponent);
  } */
}
