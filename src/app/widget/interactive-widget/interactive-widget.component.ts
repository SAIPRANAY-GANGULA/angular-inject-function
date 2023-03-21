import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INTERACTIVE_WIDGET_DEPS } from '../imports';
import { WidgetBase } from '../widget-base';

@Component({
  selector: 'app-interactive-widget',
  templateUrl: './interactive-widget.component.html',
  styleUrls: [
    '../widget-base.scss',
    './interactive-widget.component.scss'
  ],
  standalone: true,
  imports: [...INTERACTIVE_WIDGET_DEPS]
})
export class InteractiveWidgetComponent extends WidgetBase implements OnInit {

  data$!: Observable<any>;
  config: any;

  ngOnInit(): void {
    this.data$ = this.dataProvider.loadData();
    this.config = this.settings.getSettings();
  }

  refresh() {}

  addNewItem() {}

}
