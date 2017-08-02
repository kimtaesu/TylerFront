import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pcap, Pcaps, PcapService} from './service/pcap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  listPcap: Array<Pcap>;

  constructor(private pcapService: PcapService) {
  }


  ngOnInit(): void {
    this.pcapService.getPcapList()
      .subscribe(pcaps => {
        this.listPcap = pcaps.pcaps;
      }, error2 => {
        alert(error2);
      });
  }

  pcapDownload(pcap: Pcap) {
    this.pcapService.pcapDownload(pcap);
  }
}
