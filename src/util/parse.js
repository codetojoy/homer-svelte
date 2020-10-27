export function parseTextToJSON(text) {
  const categories = [];
  const allLines = text.split(/\r\n|\n/);

  allLines.forEach((line) => {
    const trimLine = line.trim();

    if (trimLine !== "") {
      const isCategory = !trimLine.includes(",");

      if (isCategory) {
        const category = newCategory(trimLine);
        categories.push(category);
      } else {
        const link = newLink(trimLine);
        const category = categories[categories.length - 1];
        const links = category["links"];
        links.push(link);
      }
    }
  });

  return categories;
}

function newCategory(name) {
  const links = [];
  return { name, links };
}

function newLink(line) {
  const tokens = line.split(",");
  const name = tokens[0].trim();
  const url = tokens[1].trim();
  return { name, url };
}
