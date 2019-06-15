import { ArticlesService } from './../articles.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-panellinks',
  templateUrl: './panellinks.component.html',
  styleUrls: ['./panellinks.component.css'],
  animations: [trigger('routeAnimations',
    [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(-50px)' }),
          stagger(40, [
            animate('200ms ease-out', style({ opacity: 1, transform: 'none', height: '*' }))
          ])
        ])
      ]),
    ]
  )]
})
export class PanellinksComponent implements OnInit {
  public articles: { _id: string; url: string; header: string; date: string; pic: string, text: string }[] = [];
  public showPosts: any = [];
  public index: number = 0;
  public totalArticles = 30;
  public articlesPerPage = 5;
  public isLoading = true;
  constructor(private articlesService: ArticlesService) {

  }

  addNext() {
    if (this.index < this.articles.length) {
      this.showPosts = this.showPosts.concat([this.articles[this.index++]]);
    }
  }

  onChange(event: PageEvent) {
    const index = event.pageIndex + 1;
    this.articlesService.getArticles(index).subscribe((post) => {
      this.index = 0;
      this.showPosts = [];
      this.articles = post;
      this.isLoading = false;
      this.addNext();
    });

  }

  ngOnInit() {
    this.articlesService.getArticles(1).subscribe((post) => {
      this.articles = post;
      this.isLoading = false;
      this.addNext();
    });
  }
}
