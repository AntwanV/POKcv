import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/Project.model';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  @Input() project: Project = new Project;

  

  link: any = [];


  ngOnInit(): void {
    this.project.techs.forEach(element => {
      this.link.push("../../assets/images/" + element + "Logo.png")
    });
  }

}
