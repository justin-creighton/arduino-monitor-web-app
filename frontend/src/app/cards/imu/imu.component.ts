import { AfterViewInit, Component, ElementRef, Input, NgZone, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { FormattedData } from '../../types/device-related-types';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-imu',
  standalone: true,
  imports: [BaseComponent],
  templateUrl: './imu.component.html',
  styleUrl: './imu.component.scss'
})
export class ImuComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() formattedData!: FormattedData;
  @ViewChild('cube') cubeRef!: ElementRef<HTMLDivElement>;
  cube: HTMLDivElement | null = null;
  animationId: number | null = null;

  constructor(private ngZone: NgZone) {

  }

  ngOnChanges(): void {

  }

  ngAfterViewInit(): void {
    this.cube = this.cubeRef.nativeElement;

    // start loop only once
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  animate = () => {
    if (!this.cube || !this.formattedData) return;
    const { roll, pitch, yaw } = this.formattedData.properties as any;

    this.cube.style.transform = `
    rotateX(${pitch}deg) 
    rotateY(${yaw}deg) 
    rotateZ(${roll}deg)
  `;

    this.animationId = requestAnimationFrame(this.animate);
  };
}
