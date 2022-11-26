import { $ } from "./utils/dom.js";
import { appear, disappear, rotate } from "./utils/effects.js";

let deployedScore = true;
let deployedRanking = true;

$("#arrow-score").addEventListener("click", () => {
  deployedScore = checkDeployed(
    deployedScore,
    $("#arrow-score"),
    $("#table-details")
  );
});

$("#arrow-ranking").addEventListener("click", () => {
  deployedRanking = checkDeployed(
    deployedRanking,
    $("#arrow-ranking"),
    $("#table-ranking")
  );
});

const checkDeployed = (deploy, arrorEl, element) => {
  if (deploy) {
    disappear(element);
    rotate(arrorEl, "180");
  } else {
    appear(element, "table");
    rotate(arrorEl, "0");
  }
  return !deploy;
};
