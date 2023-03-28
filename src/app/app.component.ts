import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'engro-assesment';
  string1: String = '';
  string2: String = '';
  anagram: String = '';
  disabled: boolean = false;
  newsList: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.http
      .get('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
      .subscribe((data: any) => {
        console.log(data);
        this.newsList.push(data);
      });
  }

  IsAnagram() {
    let a = this.string1;
    let b = this.string2;
    console.log(a, b);
    let len1 = a.length;
    let len2 = b.length;
    if ((len1 == 0 && len2 == 0) || len1!=len2 ) {
      return;
    } else {
      let str1 = a.split('').sort().join('');
      let str2 = b.split('').sort().join('');

      if (str1 === str2) {
        console.log('True');
        this.anagram = 'TRUE';
      } else {
        console.log('False');
        this.anagram = 'FALSE';
      }
    }
  }
}
