export type DevicesData = {
    [K in DeviceNames]: DeviceData;
};

export type DeviceData = {
    deviceType: DeviceTypes;
    properties: {
        [key: string]: any;
    };
};

export type ApiDeviceData = {
    deviceName: DeviceNames;
    deviceType: DeviceTypes;
    properties: {
        [key: string]: any;
    };
};

export type DeviceTypes = "IMU" | "IR" |
    "POT" |
    "SOIL_MOISTURE" |
    "ULTRA" |
    "ANALOG";

export type DeviceNames = "MPU6050" | "IRSensor" | "Potentiometer" | "SoilMoisture" | "UltrasonicSensor" | "Joystick";

export type FormattedData = {
    deviceName: DeviceNames;
    deviceType: DeviceTypes;
    properties: {
        [propertyName: string]: string;
    };
};