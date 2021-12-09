import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  tableau:any
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:3000/produit').subscribe(data=>this.tableau=data)
   }
  ngOnInit(): void {
  }

}
