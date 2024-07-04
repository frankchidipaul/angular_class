import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-one-client',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './one-client.component.html',
  styleUrl: './one-client.component.css',
  providers:[FetchService]
})
export class OneClientComponent {
  constructor(public id: ActivatedRoute,
    public http: HttpClient,
    public ss: FetchService
  ) { }

  public route_Id: any = this.id.snapshot.params['id']
  ngOnInit() {

    console.log(this.id.snapshot.params['id'])

    this.singletodo();

  }

  singletodo() {

    // this.http.get(`https://dummyjson.com/todos/${this.route_Id}`).subscribe((info: any) => {

    //   console.log(info);


    // })
    this.ss.oneTodo(this.route_Id).subscribe((infor: any) => {

      console.log(infor);


    })





  }


}
