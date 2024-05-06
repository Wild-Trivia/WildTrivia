export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function decodeHTMLEntities(text) {
  let textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

export function challengeFetcher(amount) {
  let dataFetched = fetch(
    `https://opentdb.com/api.php?amount=${amount}&type=multiple`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Please wait 5 seconds between two requests.");
      }
      return response.json();
    })
    .then((data) => {
      return data.results;
    });
  return dataFetched;
}
