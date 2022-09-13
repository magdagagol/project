import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Project';
  dataSource: Data[] = [];
  data: Data[] = [];
  searchText:string = ''; 

  constructor(private service:DataService) { }

  columns = ['WO ID', 'Description', 'Received date', 'Assigned to', 'Status', 'Priority']

  ngOnInit(): void {

    this.service.getData().subscribe(
      (data) => {
      this.data = data;
      this.dataSource = data;
      },
      (error) => {
        console.log("Request error", error)
      }
    )
  }

  search(){
    let searchData = this.filter(this.data);
    this.dataSource = searchData;
  }

  filter(dataSource: Data[]){
    return dataSource.filter(x => JSON.stringify(x).toLowerCase().includes(this.searchText.toLowerCase()))
  }
}
