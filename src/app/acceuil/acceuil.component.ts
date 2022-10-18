import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  public instagramUrl: string = 'https://www.instagram.com/antwan_kenobi';
  public linkedinUrl: string = 'https://www.linkedin.com/in/antoine-varnerot-9a1507197/';
  public facebookUrl:string = 'https://www.facebook.com/antoine.varnerot/';
  public githubUrl:string = 'https://github.com/AntwanV';

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
