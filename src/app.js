window.onload = () => {
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector("#theDomainName").innerHTML = generateDomainName();
  });
};

let generateDomainName = () => {
  let pronoun = ["the", "our"];
  let adjective = ["big", "greatest", "beautiful", "smallest", "blue"];
  let noun = ["book", "waterbear", "mountain", "mile", "vista"];
  let extension = [".com", ".edu", ".net"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjectiveIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extensionIndex = Math.floor(Math.random() * extension.length);

  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (
      adjectiveIndex = 0;
      adjectiveIndex < adjective.length;
      adjectiveIndex++
    ) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (
          extensionIndex = 0;
          extensionIndex < extension.length;
          extensionIndex++
        );
      }
    }
    return `${pronoun[pronounIndex]} ${adjective[adjectiveIndex]} ${noun[nounIndex]} ${extension[extensionIndex]}`;
  }
};

const output = generateDomainName();
