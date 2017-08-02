import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {RequestOptionsArgs} from '@angular/http';


export interface Pcaps {
  pcaps: Array<Pcap>
}

export interface Pcap {
  id: number,
  fileName: string,
  absolutePath: string
}


@Injectable()
export class PcapService {

  constructor(private http: HttpClient) {

  }

  getPcapList(): Observable<Pcaps> {
    // return this.http.get(environment.api.search);
    return this.http.get('http://localhost:8083/get');
  }

  pcapDownload(pcap: Pcap) {
    window.open('http://localhost:8083/download/' + pcap.id, '_blank');
  }
}
