import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';

const COMMON_WIDGET_DEPS = [MatCardModule, MatIconModule];

export const READONLY_WIDGET_DEPS = [...COMMON_WIDGET_DEPS]
export const INTERACTIVE_WIDGET_DEPS = [...COMMON_WIDGET_DEPS, MatButtonModule]