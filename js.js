"use strict";

const language = document.querySelector("#languageSelector");

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

let locale = "da";

const header = document.querySelector(texts[locale].texts[0].location);
const footer = document.querySelector(texts[locale].texts[1].location);

if (locale === "da") {
  header.textContent = texts[locale].texts[0].text;
  footer.textContent = texts[locale].texts[1].text;
}

language.addEventListener("change", changeLan);
function changeLan() {
  if (language.value === "da") {
    locale = "da";
  } else {
    locale = "de";
  }

  selectedLanguage();
}

function selectedLanguage() {
  texts[locale].texts.forEach((item) => {
    const element = document.querySelector(item.location);
    if (element) {
      element.textContent = item.text;
    }
  });
}
