import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollDispatcher, CdkScrollable, } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @ViewChild('testContainer') container: CdkScrollable;

  constructor(private scrollDispatcher: ScrollDispatcher) {
  }

  ngOnInit() {
  }

}
