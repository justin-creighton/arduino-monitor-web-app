export interface SensorData {
  [deviceName: string]: {
    deviceType: string,
    properties: {
      [key: string]: any,
    }
  },
}

export function parseArduinoData(data: string): SensorData | null {
  try {

    const parsedDevicesData = JSON.parse(data.trim());
    console.log('Parsed Devices Data: ', parsedDevicesData);
    
    return parsedDevicesData;
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    return null;
  }
}