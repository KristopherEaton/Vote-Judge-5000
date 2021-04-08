import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Snack } from '../../models/Snack';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent implements OnInit {
  dateTime = new Date();
  firstVoteCastDate: any;
  snackSelectionList: Snack[] = [];
  snackSelectionListReduced: Snack[] = [];
  snackObject1: Snack;
  snackObject2: Snack;
  snackObject3: Snack;
  snackObject4: Snack;
  snackObject5: Snack;
  snackObject6: Snack;
  snackItem: Snack;
  voteNumber = 0;
  voteLimiter = 4;
  currentVoteCount: number;
  votesRemaining = 3;
  voteButtonEnabled = true;
  recordNum: number;
  displayMaintenanceMessage = false;
  oneVote = 1;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.listAllSnacks();
    this.getInitialVoteStatus();
  }

  //create list of snack available for voting
  listAllSnacks() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827',
    });
    this.http
      .get('http://localhost:3000/snacks', { headers: headers })
      .subscribe(
        (response: Response) => {
          console.log(response);
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

          this.snackSelectionList.sort((a, b) => {
            if ((a.brand && a.votes) <= (b.brand && b.votes)) {
              return 1;
            } else if ((a.brand && a.votes) >= (b.brand && b.votes)) {
              return -1;
            } else {
              return 0;
            }
          });
          console.log(this.snackSelectionList);
        },
        (error) => {
          alert(
            'OOPSY DAISY!! We are sorry to inform you that the voting app is currently under maintenance and the server is off. Please try back at a later time!'
          );
        }
      );
  }

  // Storing vote count in browser
  countTotalVote(snackId): void {
    this.recordNum = snackId;
    const browserStorageOfIds = this.localStorage.retrieve(snackId.toString());
    console.log(88, browserStorageOfIds);
    const browserStorageOfVotes = this.localStorage.retrieve('vote');
    if (browserStorageOfVotes !== 3) {
      // start
      if (browserStorageOfIds !== true) {
        if (this.currentVoteCount < 3 && this.currentVoteCount < 1) {
          this.voteNumber = this.currentVoteCount + 1;
          this.localStorage.store('vote', this.voteNumber);
          this.localStorage.store(this.recordNum.toString(), true);
          //post attempt
          this.http
            .post('https://localhost:3000/snacks/vote{snackId}', {
              vote: 1,
            })
            .subscribe(
              (data) => {
                console.log('Post freakin worked!', data);
              },
              (error) => {
                console.log('Error', error);
              }
            );
          this.assignVote(this.recordNum, this.oneVote);
          alert(
            `Your first vote has been cast! You have 2 more votes you can cast within this month.`
          );
        }
        if (this.currentVoteCount == 1) {
          this.voteNumber = this.currentVoteCount + 1;
          this.localStorage.store('vote', this.voteNumber);
          this.localStorage.store(this.recordNum.toString(), true);

          // this.assignVote(snackId, this.oneVote);
          alert('You have now cast 2 votes total, use your last one wisely');
        }
        if (this.currentVoteCount == 2) {
          this.voteNumber = this.currentVoteCount + 1;
          this.localStorage.store('vote', this.voteNumber);
          this.localStorage.store(this.recordNum.toString(), true);
          this.assignVote(snackId, this.oneVote);
          alert(
            'You have just cast your LAST VOTE. Keep an eye on the snacks to see if yours are put into rotation!'
          );
        }
        // Simple function to keep vote tally correct
        const browserStorageOfVotes = this.localStorage.retrieve('vote');
        this.currentVoteCount = browserStorageOfVotes;
        this.votesRemaining = 3 - this.currentVoteCount;
        // logs for info
        console.log('votes remaining:', this.votesRemaining);
        console.log(
          'Current number of registered votes:',
          this.currentVoteCount
        );
        console.log('voted for product: #', snackId);
      } else {
        alert('You have already voted for that snack, try again!');
      }
    } else {
      alert(
        'YOU ARE NOW OUT OF VOTES! Sorry! Your voting priveleges will be restored next month! '
      );
    }
  }

  //update value in server is getting wrong version number? Ugh out of time
  assignVote(snackId, vote): void {
    const headers = new HttpHeaders({
      Authorization: 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827',
    });

    this.http
      .post('https://localhost:3000/snacks/vote{snackId}', {
        vote: 1,
      })
      .subscribe(
        (data) => {
          console.log('Post freakin worked!', data);
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }

  getInitialVoteStatus(): void {
    const browserStorageOfVotes = this.localStorage.retrieve('vote');
    this.currentVoteCount = browserStorageOfVotes;
    this.votesRemaining = 3 - this.currentVoteCount;
  }
}
