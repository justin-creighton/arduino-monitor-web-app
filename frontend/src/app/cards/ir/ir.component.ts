import { Component, Input } from '@angular/core';
import { FormattedData } from '../../types/device-related-types';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-ir',
  standalone: true,
  imports: [BaseComponent],
  templateUrl: './ir.component.html',
  styleUrl: './ir.component.scss'
})
export class IrComponent {
  @Input() formattedData!: FormattedData;
}
