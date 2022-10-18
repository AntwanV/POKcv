import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { OverviewComponent } from './overview/overview.component';
import { SkillsComponent } from './skills/skills.component';

import { NgxTimelineVerticalModule } from 'ngx-timeline-vertical';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    OverviewComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    NgxTimelineVerticalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
