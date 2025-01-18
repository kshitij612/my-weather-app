import { Component, inject, signal } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { WeatherData } from './models/weather.model';
import { CommonModule } from '@angular/common';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  weatherService = inject(WeatherService);
  City = signal('');
  dataFromApi?: WeatherData;

  getWeather() {
    if (this.City()) {

      this.weatherService.getWeatherFromApi(this.City()).subscribe(
        data => {
          this.dataFromApi = data;
          console.log(this.dataFromApi);
          this.City.set("");
        }
      );
    }
  }
}