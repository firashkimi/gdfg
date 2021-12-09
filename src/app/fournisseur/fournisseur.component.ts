import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  tableau:any
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:3000/fournisseur').subscribe(data=>this.tableau=data)
   }
  ngOnInit(): void {
  }


}
