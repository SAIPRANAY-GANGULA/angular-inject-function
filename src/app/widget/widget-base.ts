import { Directive, Input } from '@angular/core';
import { WidgetDataService } from './services/widget-data.service';
import { WidgeSettingsService } from './services/widget-settings.service';

@Directive()
export abstract class WidgetBase {

  @Input()
  id = ''
  
  @Input()
  title = '';

  constructor(
    protected dataProvider: WidgetDataService,
    protected settings: WidgeSettingsService
  ) { }

}
