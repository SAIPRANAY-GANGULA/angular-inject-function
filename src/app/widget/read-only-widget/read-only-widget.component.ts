import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { READONLY_WIDGET_DEPS } from '../imports';
import { WidgetBase } from '../widget-base';
import { WidgetActionsService } from '../services/widget-actions.service';

@Component({
  selector: 'app-read-only-widget',
  templateUrl: './read-only-widget.component.html',
  styleUrls: ['../widget-base.scss', './read-only-widget.component.scss'],
  standalone: true,
  imports: [...READONLY_WIDGET_DEPS],
})
export class ReadOnlyWidgetComponent extends WidgetBase implements OnInit {
  data$!: Observable<any>;
  config: any;

  constructor(private widgetActionsService: WidgetActionsService) {
    super();
  }

  // without inject()
  // constructor(private widgetActionsService: WidgetActionsService,
  //             dataProvider: WidgetDataService,
  //             settings: WidgeSettingsService) {
  //   super(dataProvider, settings);
  // }

  ngOnInit(): void {
    this.data$ = this.dataProvider.loadData().pipe(map((data) => data.title));
    this.config = this.settings.getSettings();
  }

  onRefresh() {
    this.widgetActionsService.refresh();
  }
}
