import { animate, animation, style, transition, trigger, useAnimation } from "@angular/animations";

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

export const slideInFromTop = trigger("slideInFromTop", [
  transition(":enter", [
    style({ transform: "translateY(-100%)" }),
    animate("500ms ease-out", style({ transform: "translateY(0)" })),
  ]),
  transition(":leave", [animate("500ms ease-in", style({ transform: "translateY(100%)" }))]),
]);

export const slideInFromBottom = trigger("slideInFromBottom", [
  transition(":enter", [
    style({ transform: "translateY(100%)" }),
    animate("500ms ease-out", style({ transform: "translateY(0)" })),
  ]),
  transition(":leave", [animate("500ms ease-in", style({ transform: "translateY(-100%)" }))]),
]);

const scaleIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }),
  animate("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", style({ opacity: 1, transform: "scale(1)" })),
]);

const scaleOut = animation([
  animate("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", style({ opacity: 0, transform: "scale(0.5)" })),
]);

export const tileSlideIn = trigger("tileSlideIn", [
  transition("void => *", [useAnimation(scaleIn, { params: { time: "500ms" } })]),
  transition("* => void", [useAnimation(scaleOut, { params: { time: "500ms" } })]),
]);
