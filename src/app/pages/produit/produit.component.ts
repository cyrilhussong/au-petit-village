import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'ton_api_url_ici';

  constructor(private http: HttpClient) {}

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl).pipe(
      map((produits: Produit[]) => {
        // traitement exemple : trier par nom
        return produits.sort((a, b) => a.nom.localeCompare(b.nom));
      })
    );
  }
}
