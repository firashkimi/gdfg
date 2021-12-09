import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  tableau:any
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:3000/client').subscribe(data=>this.tableau=data)
   }
  ngOnInit(): void {
  }

}
