import { Pipe, PipeTransform } from '@angular/core';
import { ProduitService } from '../services/produit.service'; // Vérifie le chemin

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(produits: any[], order: string): any[] {
    if (!produits) return [];
    if (order === 'asc') {
      return produits.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      return produits.sort((a, b) => b.price - a.price);
    }
    return produits;
  }
}
