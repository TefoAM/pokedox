import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {
  pokemonObj: any;
  pokemonName: string;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => {
      // this.pokemonObj = message
      console.log(this.pokemonObj=message);
    });
  }

}
