import { Component, Inject } from '@angular/core';
import { InteractiveWidgetComponent } from './widget/interactive-widget/interactive-widget.component';
import { ReadOnlyWidgetComponent } from './widget/read-only-widget/read-only-widget.component';
import { WINDOW } from './window.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ReadOnlyWidgetComponent,
    InteractiveWidgetComponent
  ]
})
export class AppComponent {
  constructor(@Inject(WINDOW) private window: Window ) {
    console.log('Window object: ', this.window);
  }
}
