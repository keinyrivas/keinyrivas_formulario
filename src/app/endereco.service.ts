import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEndereco(cep) {
    return this.http.get('http://viacep.com.br/ws/'+cep+'/json/');
  }
}
