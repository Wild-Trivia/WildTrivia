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

export function quizFetcher(amount, category, difficulty) {
  let categorySelector;
  if (category === "Any") {
    categorySelector = "";
  } else {
    categorySelector = `&category=${category}`;
  }
  let difficultySelector;
  if (difficulty === "Any") {
    difficultySelector = "";
  } else {
    difficultySelector = `&difficulty=${difficulty}`;
  }
  let dataFetched = fetch(
    `https://opentdb.com/api.php?amount=${amount}${categorySelector}${difficultySelector}&type=multiple`
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

export function quickQuizRandomizer(array1, array2) {
  const randomizedArray = [];
  while (randomizedArray.length < 6) {
    const randomElement = array1[Math.floor(Math.random() * array1.length)];
    let isSameID = false;
    for (let i = 0; i < randomizedArray.length; i++) {
      if (randomElement.id === randomizedArray[i].id) {
        isSameID = true;
      }
    }
    if (!isSameID) {
      randomizedArray.push(randomElement);
    }
  }
  for (let i = 0; i < randomizedArray.length; i++) {
    randomizedArray[i].color = array2[i];
  }
  return randomizedArray;
}
