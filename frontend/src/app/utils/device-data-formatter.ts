import { DeviceData, DeviceNames, DeviceTypes, FormattedData } from "../types/device-related-types";

function formatIMUData(
    deviceName: DeviceNames,
    deviceData: DeviceData
): FormattedData {
    return {
        deviceName,
        deviceType: deviceData.deviceType,
        properties: deviceData.properties,
    };
}

function formatIRData(
    deviceName: DeviceNames,
    deviceData: DeviceData
): any {
    return {
        deviceName,
        deviceType: deviceData.deviceType,
        properties: deviceData.properties,
    };
}

function formatPOTData(
    deviceName: DeviceNames,
    deviceData: DeviceData
): any {
    return {
        deviceName,
        deviceType: deviceData.deviceType,
        properties: deviceData.properties,
    };
}

function formatULTRAData(
    deviceName: DeviceNames,
    deviceData: DeviceData
): any {
    return {
        deviceName,
        deviceType: deviceData.deviceType,
        properties: deviceData.properties,
    };
}

function formatSOIL_MOISTUREData(
    deviceName: DeviceNames,
    deviceData: DeviceData
): any {
    return {
        deviceName,
        deviceType: deviceData.deviceType,
        properties: deviceData.properties,
    };
}

function formatSoilMoistureUserText(value: number): string {
    if (value <= 20) {
        return 'Bone Dry';
        // this.color = 'red';
        // this.message = 'Water immediately!';
    } else if (value <= 40) {
        return 'Dry';
        // this.color = 'orange';
        // this.message = 'Consider watering soon.';
    } else if (value <= 60) {
        return 'Moist';
        // this.color = 'green';
        // this.message = 'Soil is adequately moist.';
    } else if (value <= 80) {
        return 'Wet';
        // this.color = 'blue';
        // this.message = 'Soil is quite wet.';
    } else if (value > 80 && value <= 100) {
        return 'Flooded';
        // this.color = 'purple';
        // this.message = "Soil is soaked. Don't water soon!";
    } else {
        return 'Unknown';
        // this.color = 'grey';
        // this.message = 'Unable to determine soil state.';
    }
}

function formatANALOGData(
    deviceName: DeviceNames,
    deviceData: DeviceData
): any {
    return {
        deviceName,
        deviceType: deviceData.deviceType,
        properties: deviceData.properties,
    };
}

export function formatData(
    deviceName: DeviceNames,
    data: DeviceData
): any {
    switch (data.deviceType as DeviceTypes) {
        case 'IMU':
            return formatIMUData(deviceName, data); // TypeScript knows data is IMU here
        case 'IR':
            return formatIRData(deviceName, data);
        case 'POT':
            return formatPOTData(deviceName, data);
        case 'ULTRA':
            return formatULTRAData(deviceName, data);
        case 'SOIL_MOISTURE':
            return formatSOIL_MOISTUREData(deviceName, data);
        case 'ANALOG':
            return formatANALOGData(deviceName, data);
        default:
            throw new Error(`Unknown device type: ${data.deviceType}`);
    }
}