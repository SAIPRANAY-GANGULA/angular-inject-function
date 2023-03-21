import {Component, inject} from '@angular/core';
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
  // inject() can infer type from Injection token✅
  private window = inject(WINDOW);
  constructor() {
    console.log('Window object: ', this.window);
  }
  // @Inject decorator can't infer type, we have to explicitly describe the type of Injection token❌
  // constructor(@Inject(WINDOW) private window: Window ) {
  //
  // }
}
