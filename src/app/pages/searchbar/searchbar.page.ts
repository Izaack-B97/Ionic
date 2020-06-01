import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albums: any[] = [];

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.dataServices.getUsers()
      .subscribe(users => {
        console.log(users);
      });
  }

  buscar(event){
    console.log(event);
  }
}
