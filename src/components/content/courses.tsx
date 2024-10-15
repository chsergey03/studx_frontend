import Card from "./card.tsx"

function Courses() {
  const cards = [];
  const numberOfCards = 6;

  for (let i = 0; i < numberOfCards; i++) {
    const number = i + 1;

    const coverPath = `/assets/cover_0${number}.jpg`;

    cards.push(
      <Card
        key={i}
        id={number}
        title={"Курс " + number}
        coverPath={coverPath}
      />
    );
  }

  return cards;
}

export default Courses;