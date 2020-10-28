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

function getFromLocalStorage(key) {
  let links = [];
  const text = localStorage.getItem(key);
  if (text && text !== "{}") {
    links = JSON.parse(text);
  }
  return links;
}

function persist(key, links) {
  localStorage.setItem(key, JSON.stringify(links));
}

function clearLocalStorage(key) {
  localStorage.removeItem(key);
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
    updateFull();
  })();

  function updateFull() {
    const fullJSON = merge(fileCategories, localStorageLinks);
    update((entries) => fullJSON);
  }

  function addLink(detail) {
    localStorageLinks.push(detail);
    persist(STORAGE_KEY, localStorageLinks);
    updateFull();
  }

  function clearTemp() {
    clearLocalStorage(STORAGE_KEY);
    localStorageLinks = [];
    updateFull();
  }

  return { subscribe, addLink, clearTemp };
})();
