import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {
  nodePort = "http://localhost:3000";
  snackName: string;
  constructor(private http: HttpClient) { }

  getSnackInfo(){}

}
