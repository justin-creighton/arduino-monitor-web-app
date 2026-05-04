import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeviceDashboardComponent } from './components/device-dashboard/device-dashboard.component';
import { ImuComponent } from './cards/imu/imu.component';
import { IrComponent } from './cards/ir/ir.component';
import { PotentiometerComponent } from './cards/potentiometer/potentiometer.component';
import { JoystickComponent } from './cards/joystick/joystick.component';
import { UltrasonicComponent } from './cards/ultrasonic/ultrasonic.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DeviceDashboardComponent,
  ],
  imports: [
    RouterOutlet,
    BrowserModule,
    HttpClientModule,
    ImuComponent,
    IrComponent,
    PotentiometerComponent,
    JoystickComponent,
    UltrasonicComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }