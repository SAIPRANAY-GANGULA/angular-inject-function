import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INTERACTIVE_WIDGET_DEPS } from '../imports';
import { WidgetBase } from '../widget-base';
import { WidgetActionsService } from '../services/widget-actions.service';

@Component({
  selector: 'app-interactive-widget',
  templateUrl: './interactive-widget.component.html',
  styleUrls: ['../widget-base.scss', './interactive-widget.component.scss'],
  standalone: true,
  imports: [...INTERACTIVE_WIDGET_DEPS],
})
export class InteractiveWidgetComponent extends WidgetBase implements OnInit {
  data$!: Observable<any>;
  config: any;

  // without inject()
  // constructor(private widgetActionsService: WidgetActionsService,
  //             dataProvider: WidgetDataService,
  //             settings: WidgeSettingsService) {
  //   super(dataProvider, settings);
  // }

  constructor(private widgetActionsService: WidgetActionsService) {
    super();
  }

  ngOnInit(): void {
    this.data$ = this.dataProvider.loadData();
    this.config = this.settings.getSettings();
  }

  refresh() {
    this.widgetActionsService.refresh();
  }

  addNewItem() {
    this.widgetActionsService.addNewItem();
  }
}
