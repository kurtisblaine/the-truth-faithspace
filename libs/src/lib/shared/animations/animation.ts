import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInOut = [
  trigger("fadeInOut", [
    transition(":enter", [
      style({
        opacity: 0,
      }),
      animate(
        "0.5s ease-in",
        style({
          opacity: 1,
        })
      ),
    ]),

    transition(":leave", [
      style({
        opacity: 1,
      }),
      animate(
        "0.5s ease-out",
        style({
          opacity: 0,
        })
      ),
    ]),
  ]),
];

export const slideInFromLeft = trigger("slideInFromLeft", [
  transition(":enter", [
    style({ transform: "translateX(-100%)" }),
    animate("500ms ease-out", style({ transform: "translateX(0)" })),
  ]),
  transition(":leave", [animate("500ms ease-in", style({ transform: "translateX(-100%)" }))]),
]);

export const slideInFromRight = trigger("slideInFromRight", [
  transition(":enter", [
    style({ transform: "translateX(100%)" }),
    animate("500ms ease-out", style({ transform: "translateX(0)" })),
  ]),
  transition(":leave", [animate("500ms ease-out", style({ transform: "translateX(-100%)" }))]),
]);
