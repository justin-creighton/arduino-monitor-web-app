import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../services/sensor.service';

@Component({
  selector: 'app-sensor-dashboard',
  templateUrl: './sensor-dashboard.component.html',
  styleUrls: ['./sensor-dashboard.component.scss']
})
export class SensorDashboardComponent implements OnInit {

  sensorData: {[sensorName: string]: {
    [propertyName: string]: any
  }} = {};

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    console.log('sensorData', this.sensorData);
    
    this.loadData();
  }

  loadData(): void {
    this.sensorService.onSensorUpdate((data) => {
    this.upsertSensors(data);
  });
  }

  upsertSensors(sensors: any) {
    Object.keys(sensors).forEach(sensorKey => {

      // Create device group if it doesn't exist
      if (!this.sensorData[sensorKey]) {
        this.sensorData[sensorKey] = {};
      }

      const deviceSensors = sensors[sensorKey];

      Object.keys(deviceSensors).forEach(deviceKey => {
        const newValue = deviceSensors[deviceKey];
        const oldValue = this.sensorData[sensorKey][deviceKey];

        // Only update if value changed
        if (oldValue !== newValue) {
          this.sensorData[sensorKey][deviceKey] = newValue;
        }
      });
    });
  }
}