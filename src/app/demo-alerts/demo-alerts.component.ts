import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-demo-alerts',
  templateUrl: './demo-alerts.component.html',
  styleUrls: ['./demo-alerts.component.css']
})
export class DemoAlertsComponent implements OnInit {

  @Input() student;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
