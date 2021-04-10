import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero?: Hero;

  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


  onSelect(hero: Hero): void {
    //this.selectedHero = hero;
    //this.messageService.add("Izvēlēts " + hero.name + "!"); Tas pats, kas zemāk tikai garāks pierakts
    this.messageService.add(`Izvēlēts ${hero.name} !`);
    this.selectedHero = JSON.parse(JSON.stringify(hero));
  }
}
