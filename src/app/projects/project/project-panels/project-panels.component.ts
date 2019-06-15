import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { trigger, transition, style, animate, stagger, query, group } from '@angular/animations';
import { ProjectPanelsService } from '../../project-panels.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-project-panels',
  templateUrl: './project-panels.component.html',
  styleUrls: ['./project-panels.component.css'],
  animations: [trigger('routeAnimations',
    [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(-50px)' }),
          stagger(40, [
            animate('200ms ease-out', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ]),
    ]
  )]
})
export class ProjectPanelsComponent implements OnInit {
  public projects: { category: string; name: string; pic: string; url: string, text: string, date: string }[] = [];
  public showPosts: any = [];
  public index: number = 0;
  public totalArticles = 30;
  public articlesPerPage = 5;
  public isLoading = true;
  public pageIndex;


  public constructor(private projectsService: ProjectPanelsService,
    private route: ActivatedRoute) { }

  addNext() {
    if (this.index < this.projects.length) {
      this.showPosts = this.showPosts.concat([this.projects[this.index++]]);
    }
  }

  onChange(event: PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    this.route.params.subscribe((temp: Params) => {
      if (temp['category'] !== undefined) {
        this.projectsService.getProjectPanelsSort(temp['category'], this.pageIndex).subscribe((postData) => {
          this.index = 0;
          this.showPosts = [];
          this.projects = postData;
          this.isLoading = false;
          this.addNext();
        });
      }
      else {
        this.projectsService.getProjectPanels(this.pageIndex).subscribe((postData) => {
          this.index = 0;
          this.showPosts = [];
          this.projects = postData;
          this.isLoading = false;
          this.addNext();
        });
      }
    });
  }
  ngOnInit() {
    this.route.params.subscribe((temp: Params) => {
      this.pageIndex = 0;
      if (temp['category'] !== undefined) {
        this.projectsService.getProjectPanelsSort(temp['category'], this.pageIndex).subscribe((postData) => {
          this.index = 0;
          this.showPosts = [];
          this.projects = postData;
          this.isLoading = false;
          this.addNext();
        });
      }
      else {
        this.projectsService.getProjectPanels(this.pageIndex).subscribe((postData) => {
          this.projects = postData;
          this.isLoading = false;
          this.addNext();
        });
      }

    });
  }
}
