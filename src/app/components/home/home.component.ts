import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.checkServerStatus();
  }

  checkServerStatus() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827',
    });

    this.http
      .get('http://localhost:3000/snacks', { headers: headers })
      .subscribe(
        (response: Response) => {},

        (error) => {
          alert(
            'OOPS! We are sorry to inform you that the voting app is currently under maintenance and the server is off. Please try back at a later time!'
          );
        }
      );
  }
}
