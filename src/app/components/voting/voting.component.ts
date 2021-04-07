import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Snack } from '../../models/Snack';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent implements OnInit {
  voteCount = 3;
  totalvoteCount: number;
  dateTime = new Date();
  firstVoteCastDate: any;
  snackSelectionList: Snack[] = [];
  snackObject1: Snack;
  snackObject2: Snack;
  snackObject3: Snack;
  snackObject4: Snack;
  snackObject5: Snack;
  snackObject6: Snack;
  snackItem: Snack;
  vote: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getSnackData();
  }

  getSnackData() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827',
    });
    this.http
      .get('http://localhost:3000/snacks', { headers: headers })
      .subscribe((response: Response) => {
        
        this.snackObject1 = response[0];
        this.snackSelectionList.push(this.snackObject1);
        this.snackObject2 = response[1];
        this.snackSelectionList.push(this.snackObject2);
        this.snackObject3 = response[2];
        this.snackSelectionList.push(this.snackObject3);
        this.snackObject4 = response[3];
        this.snackSelectionList.push(this.snackObject4);
        this.snackObject5 = response[4];
        this.snackSelectionList.push(this.snackObject5);
        this.snackObject6 = response[5];
        this.snackSelectionList.push(this.snackObject6);
        console.log(2, this.snackSelectionList);
      });
  }
  // not finished
  registerVote(snackId): void {
    console.log('voted for:',snackId);
    this.vote = 1;
    const headers = new HttpHeaders({
      Authorization: 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827',
    });
    this.http
      .post('https://localhost:3000/snacks/vote{snackId}', { headers: headers }).subscribe(response => {
        console.log(4,response)
      });
    this.trackVotes();
  }
  //not finished
  trackVotes():void {
    if (this.voteCount >= 1) {
      this.firstVoteCastDate = this.dateTime;
      this.voteCount = this.voteCount - 1;
      alert(
        `You have 2 more votes starting from this date: ${this.firstVoteCastDate}`
      );
    } else {
      alert('You have no more votes to cast!');
    }
  }
  assignVote(): void {}
}
