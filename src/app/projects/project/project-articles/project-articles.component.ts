import { ProjectPanelsService } from './../../project-panels.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component({
  selector: 'app-project-articles',
  templateUrl: './project-articles.component.html',
  styleUrls: ['./project-articles.component.css'],
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
export class ProjectArticlesComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  public project: { url: string, title: string, banner: string, content: string, links: string };
  isLoading: boolean = true;

  constructor(private projectPanelsService: ProjectPanelsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.projectPanelsService.getProjectArticle(param['projectName']).subscribe((postData) => {
        this.project = postData;
        this.isLoading = false;
      });
    });

  }
}
