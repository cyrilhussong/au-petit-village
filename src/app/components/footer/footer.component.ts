import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer><p>© 2025 Mon entreprise | <a href="#">Facebook</a> | <a href="#">Twitter</a></p></footer>`,
  styles: [`footer { background: #eee; padding: 1em; text-align: center; }`]
})
export class FooterComponent { }
