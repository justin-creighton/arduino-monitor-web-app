import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { io } from '../server';

import { serialConfig } from "../configs/serial-config";
import { parseArduinoData } from "../utils/parser";

let latestData: Record<string, any> = {};

const port = new SerialPort({
  path: serialConfig.port,
  baudRate: serialConfig.baudRate
}, (err) => {
  if (err) {
    return console.error("Error opening serial port:", err.message);
  }
  console.log("Serial port opened successfully");
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

port.on("open", () => {
  console.log("Port is now open!");
});

parser.on("data", (data: string) => {
  console.log("Raw Arduino:", data);

  const parsed = parseArduinoData(data);

  if (parsed) {
    upsertPorperties(parsed);
    console.log("Parsed:", parsed);
    io.emit('sensor-update', latestData);
  }
});

function upsertPorperties(parsed: any) {
  if (!latestData[parsed.sensorName]) {
    latestData[parsed.sensorName] = parsed.properties;
  } else {
    Object.keys(parsed.properties).forEach((property: any) => {
      latestData[parsed.sensorName][property] = parsed.properties[property];
    })
  }
}