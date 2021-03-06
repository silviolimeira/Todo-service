// https://github.com/ReactiveX/rxjs#cdn
// https://www.learnrxjs.io/operators/transformation/switchmap.html

////example 1
// const { fromEvent, observable, from } = rxjs;
// const { map, filter, mergeMap, flatMap } = rxjs.operators;

// let elem = document.getElementById("input");

// function getStarwarsCharactersStream(id) {
//   return fetch("https://swapi.co/api/people/" + id).then(data => data.json());
// }

// function longRunningTask(input) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(".");
//       resolve("response based on " + input);
//     }, 5000);
//   });
// }

// let keyStream$ = fromEvent(elem, "keyup").pipe(
//   map(ev => ev.key),
//   // filter(elem => elem. > 3),
//   filter(key => key !== "Backspace"),
//   // mergeMap(key => from(getStarwarsCharactersStream(key)))
//   flatMap(key => longRunningTask(elem.value))
// );

// keyStream$.subscribe(key => console.log(key));

// // fetch("https://swapi.co/api/people/1")
// //   .then(data => data.json())
// //   .then(data => console.log("data: ", data));

// // emits entered key chars

// example 2: from(fetch).pipe(flatMap(from)) return stream that's is subscribe to capture json)
const { fromEvent, observable, from } = rxjs;
const { map, filter, mergeMap, flatMap } = rxjs.operators;

let convertedStream$ = from(fetch("https://swapi.co/api/people/1")).pipe(
  flatMap(r => from(r.json()))
);

// returns data
convertedStream$.subscribe(data => {
  console.log("data: ", data);
});
