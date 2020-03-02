import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-demo-detailes',
  templateUrl: './demo-detailes.component.html',
  styleUrls: ['./demo-detailes.component.css']
})
export class DemoDetailesComponent implements OnInit {

  student;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.student = Student[+params.get('studentId')]
    })
  }

}
