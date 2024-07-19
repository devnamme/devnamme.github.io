import { NavList } from "../data/routes";

export const ScrollTo = (left: number, main: HTMLElement) => {
  main.scrollTo({
    left: left,
    behavior: "smooth",
  });

  let perc = left / (main.scrollWidth - window.innerWidth);

  window.scrollTo({
    top: perc * (document.body.scrollHeight - window.innerHeight),
    behavior: "smooth",
  });
};

export const FindByPathAndScrollTo = (path: string) => {
  Object.keys(NavList).forEach((id: string) => {
    if (NavList[id].path === path) {
      let main = document.getElementById("main")!;

      if (NavList[id].targetCenterFirst) {
        let el = document.querySelector(
          `#${NavList[id].targetCenterFirst} > *:first-child`
        ) as HTMLElement;
        CenterOnElement(el, main);
      } else {
        let el = document.getElementById(id)!;
        CenterOnElement(el, main);
      }
    }
  });
};

export const CenterOnElement = (target: HTMLElement, main: HTMLElement) => {
  const parent = target.parentNode as HTMLElement;

  let left =
    parent.offsetLeft +
    (target.getBoundingClientRect().left -
      parent.getBoundingClientRect().left) -
    (window.innerWidth - target.getBoundingClientRect().width) / 2;

  ScrollTo(left, main);
};
