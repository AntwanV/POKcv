import { Component, HostListener } from '@angular/core';
import gsap from 'gsap' ;
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Antoine Varnerot';

  scroller: any;

  ngOnInit(){

    AOS.init();
    
    gsap.registerPlugin(ScrollTrigger);
    this.scroller = new LocomotiveScroll({
      el: document.querySelector(".scrollTrigger") as HTMLElement,
      smooth: true
    });
    /* SMOOTH SCROLL */
    this.scroller.on("scroll", ScrollTrigger.update);

      var a = this.scroller 

    ScrollTrigger.scrollerProxy(".scrollTrigger", {
      scrollTop(value) {
        return arguments.length
          ? a.scrollTo(value, 0, 0)
          : a.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
    ScrollTrigger.addEventListener("refresh", () => this.scroller.update());
  
    ScrollTrigger.refresh();


  }
  
  
  /* COLOR CHANGER */
  @HostListener('window:load', ['$event']) function () {
    var scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
      console.log(colorSection);
      const prevBg = i === 0 ? "" : scrollColorElems[i-1].attributes[1].value;
      const prevText = i === 0 ? "" : scrollColorElems[i-1].attributes[1].value;
      
      ScrollTrigger.create({
        trigger: colorSection,
        scroller: ".scrollTrigger",
        start: "top 50%",
        onEnter: () => 
          gsap.to("body", {
            backgroundColor: colorSection.attributes[1].value,
            overwrite: "auto"
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
          })
      });
    });
  }
}
