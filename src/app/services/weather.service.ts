import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http = inject(HttpClient);

  private url = 'https://api.openweathermap.org/data/2.5/weather';
  // private headers = new HttpHeaders({
  //   'x-rapidapi-key': '0cc318e893msh1a00dfeaec7bbecp14bb39jsn8f726c77fa6b',
  //   'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  // })
  private api_key = '242728275dc1df56e8158a53f24fd429';

  getWeatherFromApi(city: string) {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.api_key)
      .set('units', 'metric')

    return this.http.get<WeatherData>(this.url, { params });
  }
}
