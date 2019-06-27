// https://github.com/ReactiveX/rxjs#cdn

const { fromEvent, observable, from } = rxjs;
const { map, filter, mergeMap } = rxjs.operators;

let elem = document.getElementById("input");

function getStarwarsCharactersStream(id) {
  return fetch("https://swapi.co/api/people/" + id).then(data => data.json());
}

let keyStream$ = fromEvent(elem, "keyup").pipe(
  map(ev => ev.key),
  filter(key => key !== "Backspace"),
  mergeMap(key => from(getStarwarsCharactersStream(key)))
);

keyStream$.subscribe(key => console.log(key));

// fetch("https://swapi.co/api/people/1")
//   .then(data => data.json())
//   .then(data => console.log("data: ", data));

// emits entered key chars
