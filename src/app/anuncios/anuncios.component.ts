import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anuncios } from '../anuncios';
import { AnunciosService } from '../anuncios.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncios: Anuncios[]= [];
  formGroup : FormGroup;


  constructor (private anunciosService: AnunciosService, private formBuilder: FormBuilder){
        this.formGroup = formBuilder.group({
          id : [''],
          imagem: [''],
          titulo :[''],
          tipo :[''],
          publico :[''],
          info : ['']
        });
  }
  ngOnInit(): void {
    this.loadAnuncios();
  }

  loadAnuncios(){
    this.anunciosService.getAnuncios().subscribe(
      {
        next: data => this.anuncios = data,
        error:(msg) => console.log("Erro ao chamar enpoint" + msg)}
  )
  }

  save(){
    this.anunciosService.save(this.formGroup.value).subscribe({
      next: data => {
        this.anuncios.push(data);
        this.formGroup.reset();
      }
    });
  }
}
