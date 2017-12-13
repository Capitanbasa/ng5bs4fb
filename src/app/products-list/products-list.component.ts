import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  courses : Observable<any[]>;
  
  constructor(db:AngularFireDatabase) { 
    //db.list('/courses').subscribe(courses => {this.courses = courses, console.log(this.courses)});
    this.courses = db.list('/courses').valueChanges();
  }

  ngOnInit() {
    
  }


}
