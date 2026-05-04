import { Component, Input } from '@angular/core';
import { FormattedData } from '../../types/device-related-types';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-potentiometer',
  standalone: true,
  imports: [BaseComponent],
  templateUrl: './potentiometer.component.html',
  styleUrl: './potentiometer.component.scss'
})
export class PotentiometerComponent {
  @Input() formattedData!: FormattedData
}
