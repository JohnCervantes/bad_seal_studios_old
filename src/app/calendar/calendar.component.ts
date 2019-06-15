import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public tasks: String[] = ['Go outside',  'Return to bed', 'Return to bed', 'Return to bed' ];
  public selectedIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  select(index: number) {this.selectedIndex = index;}

}
