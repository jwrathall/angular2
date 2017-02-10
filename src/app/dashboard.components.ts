import {Component} from '@angular/core';

import{Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  moduleId:module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.components.html',
  styleUrls:['./dashboard.components.css']
})

export class DashboardComponent{

  heroes: Hero[];

  constructor(private heroService:HeroService){}

  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}


