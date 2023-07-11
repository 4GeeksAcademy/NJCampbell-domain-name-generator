window.onload = () => {
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector("#theDomainName").innerHTML = generateDomainName();
  });
};

let generateDomainName = () => {
  let pronoun = ["the", "our", "your"];
  let adjective = ["big", "greatest", "beautiful", "smallest", "blue", "best"];
  let noun = ["book", "waterbear", "mountain", "mile", "guitar", "vista"];
  let extension = [".com", ".net", ".edu", ".gov"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjectiveIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extensionIndex = Math.floor(Math.random() * extension.length);

  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (
      let adjectiveIndex = 0;
      adjectiveIndex < adjective.length;
      adjectiveIndex++
    ) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (
          let extensionIndex = 0;
          extensionIndex < extension.length;
          extensionIndex++
        ) {}
      }
    }
  }
  return `${pronoun[pronounIndex]}${adjective[adjectiveIndex]}${noun[nounIndex]}${extension[extensionIndex]}`;
};

const output = generateDomainName();
