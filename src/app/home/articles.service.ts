import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class ArticlesService {
    public articlePanels = new Subject<{ _id: string, url: string; header: string; date: string; pic: string, text: string }[]>();
    public article = new Subject<{ _id: string, url: string, date: string, banner: string; title: string, content: string }>();
    public env = environment.apiURL;
    constructor(private http: HttpClient) { }

    getArticles(currentPage: number) {
        const queryParams = `?page=${currentPage}`;
        this.http.get<{ _id: string, url: string; header: string; date: string; pic: string, text: string }[]>(this.env + '/articlePanels' + queryParams)
            .subscribe((postData) => {
                this.articlePanels.next([...postData].sort());
            });
        return this.articlePanels.asObservable();
    }

    getArticle(name: string) {
        let i = 0;
        this.http.get<{ _id: string, url: string; date: string; banner: string; title: string, content: string }[]>(this.env + '/articles')
            .subscribe((postData) => {

                for (i = 0; i < postData.length; i++) {
                    if (postData[i].url === name) {
                        this.article.next(postData[i]);
                    }
                }
            });
        return this.article.asObservable();
    }


}
