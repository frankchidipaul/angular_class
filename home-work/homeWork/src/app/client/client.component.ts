import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FetchService } from '../services/fetch.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-client',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule, MatButtonModule, MatDialogModule],

  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
  providers: [FetchService]
})
export class ClientComponent {
  readonly dialog = inject(MatDialog);


  constructor(public http: HttpClient,
    public router: Router,
    public ff: FetchService
  ) { }
  public todo: any = []
  public loading: boolean = false

  ngOnInit() {

    this.fetchUser()


  }





  fetchUser() {


    this.loading = true;

    this.ff.fetchTodo().subscribe((data: any) => {
      this.todo = data.todos;
      this.loading = false;
      console.log(this.todo);





    })


  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  viewOne(id: any) {
    // console.log(id);
    this.router.navigate([`/oneclient/${id}`])



  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog { }