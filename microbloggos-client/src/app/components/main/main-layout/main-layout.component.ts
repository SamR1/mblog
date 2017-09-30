import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('left', { read: ViewContainerRef })
  private left: ViewContainerRef;

  @ViewChild('right', { read: ViewContainerRef })
  private right: ViewContainerRef;

  constructor(private route: ActivatedRoute, private cfr: ComponentFactoryResolver) {  }

  ngOnInit() {
      this.route.data
          .subscribe((data: any) => {
              if (!!data && !!data.composition) {
                  for (let prop in data.composition) {
                      data.composition[prop].map(component => {
                          const factory = this.cfr.resolveComponentFactory(component);
                          this[prop].createComponent(factory);
                      });
                  }
              }
          });
  }
}
