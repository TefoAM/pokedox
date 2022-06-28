import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  message: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //set message to empty string
    this.dataService.currentMessage.subscribe(message => this.message = message);
    // get pokemon
    this.dataService.getPokemons().subscribe((pokeAPIdata: any) => {
      pokeAPIdata.results.forEach((pokemon: any) => {
        this.dataService.getEachPokemon(pokemon.name)
          .subscribe((eachPokemon: any) => {
            this.pokemons.push(eachPokemon);
            console.log(this.pokemons);
          });
        });
    });

  }

  sendMessage(pokemonName: any) {
    let pokemonObject = this.pokemons.find(pokemon => pokemon.name === pokemonName);
    this.dataService.changeMessage(pokemonObject);
  }

}
