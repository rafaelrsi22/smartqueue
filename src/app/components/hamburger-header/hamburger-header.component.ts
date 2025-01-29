import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hamburger-header',
  imports: [],
  animations: [
    trigger("topToX", [
      state("closed", style({
        transform: "rotate(0deg) translateY(0) translateX(0)",
        opacity: 1
      })),
      state("open", style({
        transform: "rotate(45deg)",
        opacity: 1
      })),
      transition("closed <=> open", [animate("300ms ease-out")]),
    ]),
    trigger("middleToX", [
      state("closed", style({
        opacity: 1
      })),
      state("open", style({
        opacity: 0
      })),
      transition("closed <=> open", [animate("200ms ease-out")]),
    ]),
    trigger("bottomToX", [
      state("closed", style({
        transform: "rotate(0deg) translateY(0) translateX(0)",
        opacity: 1
      })),
      state("open", style({
        transform: "rotate(-45deg) translateY(-8px) translateX(-22px)",
        opacity: 1
      })),
      transition("closed <=> open", [animate("300ms ease-out")]),
    ]),
    trigger("animateMenu", [
      transition(":enter", [
        style({opacity: 0, transform: "translateY(-5px)"}),
        animate("300ms ease-out", style({opacity: 1, transform: "translateY(0)"}))
      ]),
      transition(":leave", [
        animate("300ms ease-out", style({opacity: 0, transform: "translateY(-5px)"}))
      ]),
    ])
  ],
  templateUrl: './hamburger-header.component.html',
  styleUrl: './hamburger-header.component.css'
})
export class HamburgerHeaderComponent implements OnInit, OnDestroy {
  private breakpointSubscription: Subscription | undefined;
  buttonState: "closed" | "open" = "closed";

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpointObserver.observe(['(min-width: 700px)']).subscribe((state: BreakpointState) => {
      if (state.matches && this.isOpen()) {
        this.buttonState = "closed";
      }
    });
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

  changeState() {
    this.buttonState = this.buttonState == "closed" ? "open" : "closed";
  }

  isOpen() {
    return this.buttonState == "open";
  }
}
