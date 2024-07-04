import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { single } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
  projectId: string;
  decription: string;
  processStatus: string;
  requestedBy: string;
  warehouseId: string;
}

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://localhost:8080';

@Component({
  selector: 'app-material-request',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './material-request.component.html',
  styleUrl: './material-request.component.scss'
})
export class MaterialRequestComponent {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(id: string, requestedBy: string) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {requestedBy: requestedBy, projectId: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule
  ],
})

export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  projectId = this.data.projectId
  requestedBy = this.data.requestedBy
  readonly warehouseSelect = [
    "27c98688-22d0-496f-8f26-651dda42ad22",
    "1fcc0f34-f134-4c4b-81c7-a8187d8d5228",
    "9ee2f167-e25e-47c7-b09c-30bde41ccb32"
  ]
  warehouseId = ""
  description = ""
  project = {}

  constructor(private httpClient:HttpClient) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    console.log(this.projectId, this.warehouseId, this.requestedBy, this.description)
    const body = {
      projectId: this.projectId,
      warehouseId: this.warehouseId,
      requestBy: this.requestedBy,
      description: this.description,
      processStatus: "PENDING"
    };

    try {
      const materialRequest = this.httpClient.post('http://localhost:8080/material-requests/add', body)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error);
      });
    } catch (error) {
      console.log(error)
    }
  }
}