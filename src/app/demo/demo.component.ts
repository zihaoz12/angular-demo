import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  

  students = [
    {
      id:1,
      firstName:'Hello',
      lastName:'World',
      rollNum:1,
      email:'123@mail.com',
      mobileNum:1234456
    },
    {
      id:2,
      firstName:'Jimmy',
      lastName:'Peter',
      rollNum:1,
      email:'abc@mail.com',
      mobileNum:1234345456
    },
    {
      id:3,
      firstName:'Hello',
      lastName:'World',
      rollNum:12,
      email:'123334@mail.com',
      mobileNum:12342456
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  shareItem(){
    console.log("Share!")
  }

  onNotify(){
    console.log("test emit")
  }

}
