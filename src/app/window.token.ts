import {inject, InjectionToken, PLATFORM_ID} from "@angular/core";

export const WINDOW = new InjectionToken<Window>('global Window object', {
  providedIn: 'root',
  factory: () => {
    // inject function was only used in factory before angular 14
    const platform = inject(PLATFORM_ID)
    return platform === 'browser' ? window : {} as Window;
  }
})
