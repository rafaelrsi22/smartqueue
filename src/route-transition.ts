import { animate, query, style, transition, trigger } from "@angular/animations";

export const routeTransition = trigger("routeTransition", [
  transition("* => *", [
    query(":enter", [
      style({opacity: 0, height: "0"})
    ], {optional: true}),
    query(":leave", [
      animate("200ms", style({opacity: 0, height: "0"}))
    ], {optional: true}),
    query(":enter", [
      animate("200ms", style({opacity: 1, height: "0"}))
    ], {optional: true}),
  ])
]);