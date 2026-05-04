import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { ApiDeviceData } from '../types/device-related-types';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private socket: Socket;

  constructor(private http: HttpClient) { 
    this.socket = io('http://localhost:3000');
  }

  onDeviceUpdate(callback: (data: ApiDeviceData[]) => void) {  
    this.socket.on('connect', () => console.log('Connected!'));
    this.socket.on('data-updated', callback);
  }
}