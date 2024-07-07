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
    if (NavList[id] == path) {
      let el = document.getElementById(id);
      let main = document.getElementById("main")!;

      ScrollTo(el!.offsetLeft - main.getBoundingClientRect().left, main);
    }
  });
};

export const CenterOnElement = (target: HTMLElement, main: HTMLElement) => {
  let left =
    target.offsetLeft -
    (window.innerWidth - target.getBoundingClientRect().width) / 2;

  ScrollTo(left, main);
};
