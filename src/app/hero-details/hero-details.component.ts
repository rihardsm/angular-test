import { ReturnStatement } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
