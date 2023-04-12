import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor( ) {}
//name = 'abc';

  ngOnInit() {
  
  }

  name : string = "";
  file: any;
  getName(name : string){
    this.name = name;
  }

  getFile(event :any){
    this.file = event.target.files[0];
    console.log('file', this.file);
  }
}
