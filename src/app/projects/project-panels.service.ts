import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { environment } from '../../environments/environment';

@Injectable()
export class ProjectPanelsService {
  public projects = new Subject<{ _id: string, url: string, title: string, banner: string, content: string, links: string }>();
  constructor(private http: HttpClient) { }
  public env = environment.apiURL;


  getProjectArticle(name: string) {
    let i = 0;
    this.http.get<{ _id: string, url: string, title: string, banner: string, content: string, links: string }[]>(this.env + '/projects')
      .subscribe((postData) => {
        for (i = 0; i < postData.length; i++) {
          if (postData[i].url === name) {
            this.projects.next(postData[i]);
          }
        }
      });
    return this.projects.asObservable();
  }



  getProjectPanels(currentPAge: number) {
    const queryParams = `?page=${currentPAge}`;
    const projectPanels = new Subject<{ category: string; name: string; pic: string; url: string, text: string, date: string }[]>();
    this.http.get<{ _id: string, category: string; name: string; pic: string; url: string, text: string, date: string }[]>(this.env + '/projectPanels' +queryParams)
      .subscribe((postData) => {
        projectPanels.next([...postData]);
      });
    return projectPanels.asObservable();
  }

  getProjectPanelsSort(category: string, currentPAge: number) {
    const queryParams = `?page=${currentPAge}`;
    let i = 0;
    const server = [];
    const projectPanels = new Subject<{ category: string; name: string; pic: string; url: string, text: string, date: string }[]>();

    this.http.get<{ _id: string, category: string; name: string; pic: string; url: string, text: string, date: string }[]>(this.env + '/projectPanels' + queryParams)
      .subscribe((postData) => {
        for (i = 0; i < postData.length; i++) {
          if (postData[i].category === category) {
            server.push(postData[i]);
          }
        }
        projectPanels.next([...server]);
      });
    return projectPanels.asObservable();
  }

}