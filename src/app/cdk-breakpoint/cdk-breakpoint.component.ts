import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-cdk-breakpoint',
  templateUrl: './cdk-breakpoint.component.html',
  styleUrls: ['./cdk-breakpoint.component.scss']
})
export class CdkBreakpointComponent implements OnInit {

  isMobile: boolean;

  constructor(private breakPointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.handleLayout

    this.breakPointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
    ]).subscribe(
      result => {
        if (result.matches) {
          this.handleLayout();
        }
      }
    );
  }

  handleLayout() {
    if (this.breakPointObserver.isMatched(Breakpoints.Handset)) {
      console.log("Handset");
      this.isMobile = true;
    }
    else if (this.breakPointObserver.isMatched(Breakpoints.Tablet)) {
      console.log("Tablet");
      this.isMobile = false;
    }
    else if (this.breakPointObserver.isMatched(Breakpoints.Web)) {
      console.log("Web");
      this.isMobile = false;
    }
  }

}
