import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ip } from '../interfaces/ip.interface';
import { GeoIp } from '../interfaces/geo-ip.interface';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  constructor(private readonly http: HttpClient) { }

  getIpAddress(): Observable<Ip> {
    return this.http.get<Ip>('https://api.ipify.org?format=json');
  }

  getCountryByIp(ip: string): Observable<GeoIp> {
    return this.http.get<GeoIp>(`https://json.geoiplookup.io/${ip}`);
  }
}
