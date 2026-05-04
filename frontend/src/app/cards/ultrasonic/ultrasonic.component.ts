import { Component, Input } from '@angular/core';
import { FormattedData } from '../../types/device-related-types';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-ultrasonic',
  standalone: true,
  imports: [BaseComponent],
  templateUrl: './ultrasonic.component.html',
  styleUrl: './ultrasonic.component.scss'
})
export class UltrasonicComponent {
  @Input() formattedData!: FormattedData;
}
