import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private socket: Socket;

  constructor(private http: HttpClient) { 
    this.socket = io('http://localhost:3000');
  }

  onSensorUpdate(callback: (data: any) => void) {
    console.log('here');
    
    this.socket.on('connect', () => console.log('Connected!'));
    this.socket.on('sensor-update', callback);
  }
}