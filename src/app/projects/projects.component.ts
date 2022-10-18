import { Component, OnInit } from '@angular/core';

import { Project } from '../models/Project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  Projects!: Project[];

  ngOnInit(): void {

    this.Projects = [{
      title: "Premier portfolio",
      techs: ["Angular", "SCSS"],
      description: "Création d'un petit portfolio pour un projet à Centrale",
      keyword: ["portfolio", "Angular"],
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
      link: "",
    },
    {
      title: "Premier portfolio",
      techs: ["Javascript", "SCSS"],
      description: "Création d'un petit portfolio pour un projet à Centrale",
      keyword: ["portfolio", "Angular"],
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
      link: "",
    },
    {
      title: "Premier portfolio",
      techs: ["Angular", "SCSS"],
      description: "Création d'un petit portfolio pour un projet à Centrale",
      keyword: ["portfolio", "Angular"],
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
      link: "",
    },
    {
      title: "Premier portfolio",
      techs: ["Angular", "SCSS"],
      description: "Création d'un petit portfolio pour un projet à Centrale",
      keyword: ["portfolio", "Angular"],
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
      link: "",
    }]
  }

  filter(value: String): void {
    switch(value) {
      case 'all':
        break;
    }
  }

}
