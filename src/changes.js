import { changeLanguage, init } from "../i18n/index.js";
import { $, $$ } from "./utils/dom.js";

$("#nick").value = window.localStorage.getItem("nick") || "";

$("#btn-start").addEventListener("click", (ev) => {
  ev.preventDefault();
  const nick = $("#nick").value;
  if (nick.length === 0) {
    window.alert("Please enter a nickname");
  } else {
    window.localStorage.setItem("nick", nick);
    window.location.href = "/game.html";
  }
});

$$("#language option").forEach((option) => {
  option.addEventListener("click", (ev) => {
    const lang = changeLanguage(ev.target.value);
    window.localStorage.setItem("lang", ev.target.value);
    changeIndexPage(lang);
  });
});

const changeIndexPage = (l) => {
  const { index } = l;
  $("#nick-label").innerText = index.input.label;
  $("#nick").placeholder = index.input.placeholder;
  $("#language-label").innerText = index.selector.label;
  $("#language-detail").innerText = index.selector.detail;
  $("#btn-start").innerText = index.buttons.start;
  $("#btn-inst").innerText = index.buttons.instructions;
  $("#btn-rank").innerText = index.buttons.ranking;
  $("footer p").innerText = index.footer.developer;
  $("footer a").innerText = index.footer.code;
};

function initIndexPage() {
  const lang = init();
  $("#language").value = lang;
  changeIndexPage(changeLanguage(lang));
}

initIndexPage();
