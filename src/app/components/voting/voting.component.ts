import { Component, OnInit } from '@angular/core';
import { Snack } from '../../models/Snack';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})

export class VotingComponent implements OnInit {
  voteCount = 3;
  totalvoteCount: number;
  dateTime = new Date();
  firstVoteCastDate: any;
  snackSelectionList: Snack[] = [

      {id: 1,
        brand: "Bear Naked",
        product:"V'nilla Almund Granola",
        description: "Every bag of Granola starts with us foraging for irresistible flavors and bountiful chunks of goodness. This light and crispy Granola is made with whole grain oats and crunchy Almunds.",
        image: `http://localhost:4200/assets/01.jpg`,
        votes:Math.floor(Math.random() * 100) + 1 ,
      },
      {
        id: 2,
        brand: "Emerald Nuts",
        product: "Dill Pickle-Flavored Cashews",
        description:  "If you like snacking on pickles, prepare to be obsessed with this snack: It combines the tangy flavor you love with the hearty crunch of cashews. And it's less drippy to eat on the go.",
        image: `http://localhost:4200/assets/02.jpg`,
        votes: Math.floor(Math.random() * 100) + 1 ,
      },
      {
        id: 3,
        brand: "Kashi",
        product: "Honey Pecan Baklava Nutrition Bars",
        description: "This isn't your typical granola bar. Kashi's new plant-powered bars are a mix of grains, nuts, seeds, pea crisps and nut butter, and they come in four flavors: Dark Chocolate Cashew Chia, Honey Pecan Baklava, Peanut Hemp Crunch, Dark Chocolate and Nut Butter. The best part? Each one packs 8 grams of protein and 4 grams of fiber, so they'll fill you up from second breakfast to lunch.",
        image: `http://localhost:4200/assets/03.jpg`,
        votes: Math.floor(Math.random() * 100) + 1 ,
      },
      {id: 4,
        brand: "Cliff",
        product:"Energy Bars",
        description: "Nutrition for sustained energy. Made with organic oats & soybeans. High in protein. No trans fats. 23 vitamins & minerals.",
        image: `http://localhost:4200/assets/04.jpg`,
        votes:Math.floor(Math.random() * 100) + 1 ,
      },
      {
        id: 5,
        brand: "Nature Valley",
        product: "Crunchy Granola Bars",
        description:  "Nature Valley Oats 'n Honey Granola Bars combine real honey and rolled oats to produce a sweet, wholesome snack.",
        image: `http://localhost:4200/assets/05.jpg`,
        votes: Math.floor(Math.random() * 100) + 1 ,
      },
      {
        id: 6,
        brand: "Chobani",
        product: "Greek Yogurt",
        description: "Only natural ingredients. Grade A. Our authentic strained Greek yogurt is thick, creamy and an excellent source of protein.",
        image: `http://localhost:4200/assets/06.jpg`,
        votes: Math.floor(Math.random() * 100) + 1 ,
      },
    ];
  constructor() { }

  ngOnInit(): void {
  }

  registerVote():void {

    if (this.voteCount >= 1 ){
      this.firstVoteCastDate = this.dateTime;
      this.voteCount = this.voteCount - 1;
      alert(`You have 2 more votes starting from this date: ${this.firstVoteCastDate}` )
    }
    else {
      alert("You have no more votes to cast!");
    } 
    
  }

  assignVote():void { 
  }
}
