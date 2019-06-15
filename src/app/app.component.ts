import { Component, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, query, group } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('routeAnimations',
    [
      transition('* => *', [
        group([
          query(':enter', [
            query('*', [
              style({ opacity: 0, transform: 'translateY(-50px)' }),
              stagger(40, [
                animate('200ms ease-out', style({ opacity: 1, transform: 'none' }))
              ])
            ])
          ], { optional: true }),
        ])
      ])
    ]
  )]
})


export class AppComponent implements AfterViewInit {
  title = 'app';
  prepareRoute(outlet: any) {
    return outlet.activatedRouteData['animation'];
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

  ngAfterViewInit() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });

    // Click event to scroll to top
    $('.scrollToTop').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  }

  goToTwitter() {
    window.open('https://www.twitter.com/vocalistx', '_blank'
    );
  }

  goToGooglePlayStore() {
    window.open('https://play.google.com/store/apps/developer?id=Bad+Seal+Studios', '_blank'
    );
  }

  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/john-cervantes', '_blank'
    );
  }

  goToGithub() {
    window.open('https://github.com/vocalists', '_blank'
    );
  }

  goToYoutube() {
    window.open('https://www.youtube.com/user/vocalists5555', '_blank'
    );
  }
}
