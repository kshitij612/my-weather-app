import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http= inject(HttpClient);

  private url = 'https://open-weather13.p.rapidapi.com/city/delhi/EN';
  private headers = new HttpHeaders({
    'x-rapidapi-key': '0cc318e893msh1a00dfeaec7bbecp14bb39jsn8f726c77fa6b',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  })
getWeatherFromApi(){
  return this.http.get<any>(this.url, {headers:this.headers});
}
  constructor() { }
}
