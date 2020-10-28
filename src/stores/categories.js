import { writable } from "svelte/store";

import { parseTextToJSON } from "../util/parse";

const LINKS_TXT_URL = "./links.txt";
const STORAGE_KEY = "homer-temp";
const TEMP = "Temp";

async function buildCategories(url) {
  let categories = [];

  await fetch(url)
    .then((res) => res.text())
    .then((text) => {
      categories = parseTextToJSON(text);
    });

  return categories;
}

// TODO:
function getFromLocalStorage(key) {
  return [];
}

function merge(fileCategories, localStorageLinks) {
  const tempCategory = { name: TEMP, links: localStorageLinks };
  const result = [...fileCategories, tempCategory];
  return result;
}

export default (function () {
  let fileCategories = [];
  let localStorageLinks = [];
  const { subscribe, set, update } = writable([]);

  (async function () {
    fileCategories = await buildCategories(LINKS_TXT_URL);
    localStorageLinks = getFromLocalStorage(STORAGE_KEY);
    const fullJSON = merge(fileCategories, localStorageLinks);
    update((entries) => fullJSON);
  })();

  function addLink(detail) {
    // TODO
    console.log(`TRACER addLink: ${detail.name} ${detail.url}`);
  }

  function clearTemp() {
    // TODO
    console.log(`TRACER hello from clearTemp`);
  }

  return { subscribe, addLink, clearTemp };
})();
