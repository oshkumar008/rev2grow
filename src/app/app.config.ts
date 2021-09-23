import { HttpClient, HttpHeaders } from '@angular/common/http';
//export const apiEndpoint = 'http://13.127.165.50/api/';
export class IAppConfig {
    apiEndpoint: string;
    HTTP_OPTIONS:any;
}

export const AppConfig: IAppConfig = {
    /* apiEndpoint: 'http://api.onefuture.com/api/',*/
    apiEndpoint: 'http://localhost:2000/',
    HTTP_OPTIONS : { headers : new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Credentials' : 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          'mode': 'no-cors'
        })
    }
};