import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { OverviewComponent } from './overview/overview.component';
import { SkillsComponent } from './skills/skills.component';

import { NgxTimelineVerticalModule } from 'ngx-timeline-vertical';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    OverviewComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    NgxTimelineVerticalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
