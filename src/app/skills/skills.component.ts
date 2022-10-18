import { Component, OnInit } from '@angular/core';

import { Event, Point, Line, TimelineProperties, TimelineSegment } from 'ngx-timeline-vertical';
import AOS from "aos";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  

  timelineThickness: string;
  startpoint!: Point;
  endpoint!: Point;
  timelineSegments: TimelineSegment[] = [];

  constructor() {
    this.timelineThickness = '10px';
  }

  ngOnInit(): void {

    this.ngxPointInit();
    this.ngxTimelineThicknessInit();
    this.addAllEvent();

    AOS.init();
  }

  ngxPointInit(): void {
    //The Point constructor takes _size: string, _color: string, _borderRadius: string
    this.startpoint = new Point('50px', '#003049', '30px');
    this.endpoint = new Point('50px', '#003049', '30px');
  }

  ngxTimelineThicknessInit(): void {
    this.timelineThickness = '7px';
  }

  

  addEvent(event: Event): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText(event.text);
    timelineSegment.timelineProperties.setColor('#003049');
    timelineSegment.getEvent().setSide(event.side);
    timelineSegment.timelineProperties.setHeight("170px")
    timelineSegment

    let point: Point = new Point('30px', '#d62828', '60px');
    timelineSegment.setPoint(point);

    let line: Line = new Line();
    
    line.setColor("#d62828")
    line.setStyle("solid")
    line.setThickness("5px");
    timelineSegment.setLine(line);


    //Push timelineSegment to timelineSegments
    this.timelineSegments.push(timelineSegment);
  } 

  addAllEvent(): void {
    let events: Event[]; 

    let event1: Event = new Event("#d62828", "24px", "right", "Diplomé de Centrale Méditérannée");
    let event2: Event = new Event("#d62828", "24px", "left", "Erasmus à l'université de Séville");
    let event3: Event = new Event("#d62828", "24px", "right", "Stage Développeur Fullstack chez Zionsay");
    events = [event1, event2, event3];
    
    events.forEach(element => {
      this.addEvent(element)
    });

    //Change style 
    // document.querySelector(".ngx-timeline-event").setAttribute("data-aos", "fade-left");
    
  }

  

  
  

}
