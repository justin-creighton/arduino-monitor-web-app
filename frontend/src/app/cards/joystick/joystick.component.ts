import { Component, Input } from '@angular/core';
import { FormattedData } from '../../types/device-related-types';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-joystick',
  standalone: true,
  imports: [BaseComponent],
  templateUrl: './joystick.component.html',
  styleUrl: './joystick.component.scss'
})
export class JoystickComponent {
  @Input() formattedData!: FormattedData
}
