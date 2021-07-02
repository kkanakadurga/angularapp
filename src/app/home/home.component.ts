import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator} from '@angular/material';

export interface Mobiles{
  name: string;
  position: number;
  price: number;
  model: string;
}

const MODELS: Mobiles[] = [
  {position: 1, name: 'nokia', price: 10079, model: 'nokia k10'},
  {position: 2, name: 'nokia', price: 40026, model: 'nokia 510'},
  {position: 3, name: 'samsung',  price: 16941, model: 'galaxy x10'},
  {position: 4, name: 'samsung',  price: 90122, model: 'samsung on8'},
  {position: 5, name: 'vivo', price: 10811, model: 'vivo pro'},
  {position: 6, name: 'vivo',  price: 12107, model: 'vivo core'},
  {position: 7, name: 'iphone',  price: 14067, model: 'iphone flip'},
  {position: 8, name: 'iphone',  price: 15994, model: 'iphone xperia'},
  {position: 9, name: 'appo',  price: 18984, model: 'appo s20'},
  {position: 10, name: 'samsung',  price: 20797, model: 'samsung pro'},
  {position: 11, name: 'iphone',  price: 22897, model: 'iphone x50'},
  {position: 12, name: 'nokia', price: 24005, model: 'nokia 630'},
  {position: 13, name: 'samsung',  price: 26815, model: 'samsung galaxy s8'},
  {position: 14, name: 'vivo',  price: 28855, model: 'vivo v8'},
  {position: 15, name: 'appo',  price: 30738, model: 'appo a8'},
  {position: 16, name: 'moto', price: 12265, model: 'moto g'},
  {position: 17, name: 'moto',  price: 12453, model: 'moto g8'},
  {position: 18, name: 'vivo',  price: 13248, model: 'vivo v10'},
  {position: 19, name: 'samsung', price: 15983, model: 'samsung j7'},
  {position: 20, name: 'samsung',  price: 40078, model: 'samsung j8'},
];
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'model'];
  dataSource = new MatTableDataSource<Mobiles>(MODELS);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

