import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild('testContainer') container: ElementRef;

  constructor(private sd: ScrollDispatcher) {
    sd.scrolled(0).subscribe(
      value => {
        console.log(this.container.nativeElement.scrollTop);
      }
    );
  }

  ngOnInit() {
  }
}
