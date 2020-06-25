import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  addVoteForm: FormGroup;
  constructor() { }

  ngOnInit() {

    this.addVoteForm = new FormGroup({
      titleVote: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
    });
    }

}
