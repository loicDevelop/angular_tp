import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css']
})
export class MemosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  maDate = Date.now();

}
