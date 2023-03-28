import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  ngOnInit() {}

  IsAnagram() {
    let a = this.string1;
    let b = this.string2;
    console.log(a, b);

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
