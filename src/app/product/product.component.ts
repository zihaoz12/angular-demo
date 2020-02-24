import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Hello: string = "Hello World";
  One: number = 1;
  Two: number = 2;
  isToggled:  boolean = false;
  productList = ["apple","banana","Orange"];

  constructor() { }

  changeProductName(name):void{
    this.Hello = name;
  }

  clickButton():void{
    console.log("Click");
    this.isToggled = !this.isToggled;
  }

  ngOnInit(): void {
  }

}
