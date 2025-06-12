import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  template: `
    <h2>Détails du produit</h2>
    <img src="https://via.placeholder.com/150" alt="Produit">
    <p>Prix : 99.99€</p>
    <p>Description détaillée du produit...</p>
  `
})
export class ProductPageComponent { }
