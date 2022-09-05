import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() articles: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
