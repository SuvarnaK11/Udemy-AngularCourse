import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  username:any
  constructor() { }

  ngOnInit(): void {
  }

  clearUserName(){
    this.username = ' ';
  }

}
