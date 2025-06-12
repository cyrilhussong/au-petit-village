import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header><h1>Mon Header</h1><nav><a routerLink="/">Accueil</a> | <a routerLink="/about">À propos</a> | <a routerLink="/contact">Contact</a></nav></header>`,
  styles: [`header { background: #eee; padding: 1em; } nav a { margin-right: 1em; }`]
})
export class HeaderComponent { }
