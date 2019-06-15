import { ArticlesService } from './../articles.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';



@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.css'],
  animations: [trigger('pageAnimations',
    [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateX(-30px)' }),
          animate('1s ease-out', style({ transform: 'none', opacity: 1 }))
        ])
      ])
    ])
  ]
})

export class HomeArticlesComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  public article: { _id: string, url: string, date: string, banner: string; title: string, content: string };
  public isLoading = true;
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.articlesService.getArticle(param['articleName']).subscribe((post) => {
        this.article = post;
        this.isLoading = false;
      });

    });
  }

  getRoute(event) {
    if (event.target.getAttribute('data-link') === `paperBoy`) {
      this.router.navigate([`/projects/websites/paperboy`]);
    } else if (event.target.getAttribute('data-link') === `hackernews`) {
      this.router.navigate([`/projects/mobile/hackernews`]);
    } else if (event.target.getAttribute('data-link') === 'google') {
      window.open('https://play.google.com/store/apps/details?id=hnbadseal.com', '_blank');
    } else if (event.target.getAttribute('data-link') === 'meditationApp') {
      window.open('https://play.google.com/store/apps/details?id=com.badsealmeditation.timer', '_blank');
    } else if (event.target.getAttribute('data-link') === 'meditation') {
      this.router.navigate([`/projects/websites/meditation`]);    }

  }
}
