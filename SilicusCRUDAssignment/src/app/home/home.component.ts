import { Component, OnInit, ViewChild } from '@angular/core';
import { DBService } from '../Services/dbservice.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiservice: DBService) { }
  is_admin: boolean;
  details: {};
  mat: any[];
  displayedColumns = ['id', 'name', 'empid', 'address', 'email', 'phone', 'action'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.apiservice.getAllEmployees()
      .subscribe(
        list => {
          this.details = list;
          this.mat = Object.keys(list).map(it => list[it])
          this.dataSource = new MatTableDataSource(this.mat)

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      )
    this.is_admin = (window.localStorage.getItem("_admin") == 'true')

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
