import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

}
