import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albums: any[];
  textoBuscar = '';

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.dataServices.getAlbums()
      .subscribe(albums => {
        // console.log(albums);
        this.albums = albums;
        console.log(this.albums);
      });
  }

  buscar(event){
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }
}
