import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormattedData } from '../../types/device-related-types';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  @Input() formattedData!: FormattedData;
}
