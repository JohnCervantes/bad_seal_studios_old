import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public state = 'enter';
  onActivate(event) {
    window.scroll(0, 0);
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }

}
