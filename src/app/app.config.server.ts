import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}


export const config = mergeApplicationConfig(appConfig, serverConfig);
