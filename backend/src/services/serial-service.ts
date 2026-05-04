import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { io } from '../server';

import { serialConfig } from "../configs/serial-config";
import { parseArduinoData } from "../utils/parser";

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
  const parsedData = parseArduinoData(data);

  if (parsedData) {
    io.emit('data-updated', parsedData);
  }
});