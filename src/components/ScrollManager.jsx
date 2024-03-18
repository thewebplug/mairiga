import LocomotiveScroll from "locomotive-scroll";

let scroll;

export function initScroll(rootNode, touchWrapperNode) {
  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    touchWrapper: touchWrapperNode,
    lerp: 0.06,
    tablet: {
      breakpoint: 768,
    },
  });

  // Optional: You can add any additional event listeners or methods here
  // scroll.on('scroll', handleScrollEvent);
  // ...
}

export function getScroll() {
  return scroll;
}
