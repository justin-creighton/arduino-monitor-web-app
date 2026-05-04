import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { formatData } from '../../utils/device-data-formatter';
import { ApiDeviceData, DeviceData, DeviceNames, DevicesData, FormattedData } from '../../types/device-related-types';
import { DEVICE_TYPES } from '../../constants/device-related-constants';

@Component({
  selector: 'app-device-dashboard',
  templateUrl: './device-dashboard.component.html',
  styleUrls: ['./device-dashboard.component.scss'],
})
export class DeviceDashboardComponent implements OnInit {
  formattedData: FormattedData[] = [];
  deltaAdjustment = 0.2;
  devicesData!: DevicesData;
  loading = true;
  deviceTypes = DEVICE_TYPES;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.deviceService.onDeviceUpdate((data: ApiDeviceData[]) => {
      this.upsertDeviceData(data);
      this.formattedData = this.#formatData(this.devicesData);
      this.loading = false;
    });
  }

  upsertDeviceData(apiDeviceDataArr: ApiDeviceData[]) {
    apiDeviceDataArr.forEach((apiDeviceData: ApiDeviceData) => {
      // Create device group if it doesn't exist
      if (!this.devicesData) {
        this.devicesData = {
          [apiDeviceData.deviceName]: {
            deviceType: apiDeviceData.deviceType,
            properties: apiDeviceData.properties,
          }
        } as DevicesData;
      } else if (!this.devicesData[apiDeviceData.deviceName]) {
        this.devicesData[apiDeviceData.deviceName] = {
          deviceType: apiDeviceData.deviceType,
          properties: apiDeviceData.properties,
        } as DeviceData;
      }

      Object.keys(apiDeviceData.properties).forEach(propertykey => {
        const newValue = apiDeviceData.properties[propertykey];
        const oldValue = this.devicesData[apiDeviceData.deviceName].properties[propertykey];

        // Only update if value changed
        if (oldValue !== newValue) {
          if (!(!isNaN(newValue) && !isNaN(oldValue) && Math.abs(newValue - oldValue) > this.deltaAdjustment)) return;
          this.devicesData[apiDeviceData.deviceName].properties[propertykey] = newValue;
        }

      });
    });    
  }

  #formatData(data: DevicesData): any[] {
    return (Object.keys(data) as DeviceNames[]).map((deviceName: DeviceNames) => {
      const deviceData = data[deviceName];
      return formatData(deviceName, deviceData);
    });
  }
}