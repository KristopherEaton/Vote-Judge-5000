import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Snack } from 'src/app/models/Snack';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  snackUrl = 'http://localhost:3000/snacks';
  snackName: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.showSnack()
  }

  showSnack(){
    this.snackName = this.http.get(`-H "Authorization: Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827" ${this.snackUrl}.json`).subscribe(documents => {
      console.log(1, documents);
    });
    
    
  }
  getSnackName(){
    
    
  }
}
