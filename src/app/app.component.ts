import {Component, OnInit} from '@angular/core';
import {NewsApiService} from "./core/services/news-api.service";
import {LogoApiService} from "./core/services/logo-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'catch-up';
  articles: Array<any> = [];
  sources: Array<any> = [];

  constructor(private newsApi: NewsApiService,
              private logoApi: LogoApiService) {
  }

  ngOnInit(): void {
    this.newsApi.initArticles()
      .subscribe((data: any) =>
      this.articles = data['articles']);
    this.newsApi.getSources()
      .subscribe((data: any) => {
        this.sources = data['sources'];
        this.sources.map(source =>
          source.urlToLogo = this.logoApi.getUrlToLogo(source));
      })
  }

  searchArticlesForSource(source: any) {
    console.log(`selected source is ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id)
      .subscribe((data: any) => {
        this.articles = data['articles'];
        this.articles.map(article => article.source.urlToLogo = source.urlToLogo);
      });
  }


}
