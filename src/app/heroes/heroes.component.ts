import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit { 
 
  heroes: Hero[]; 

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  } 
  
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(h => this.heroes = h);
  }

  add(name:string):void{
    name = name.trim();
    if(!name) {return;}
    this.heroService.addHero({name} as Hero)
    .subscribe(h => {this.heroes.push(h)})
  }

  delete(hero: Hero):void{
    this. heroes = this.heroes.filter(h => !hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
