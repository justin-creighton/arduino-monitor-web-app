export interface SensorData {
  sensorName: string,
  properties: {
    [key: string]: any,
  }
}

export function parseArduinoData(data: string): SensorData | null {
  const text = data.trim();
  const parts = text.split(":");

  if (parts.length !== 3) return null;

  return {
    sensorName: parts[0]!,
    properties: { [parts[1]!]: parts[2]}
  };
}