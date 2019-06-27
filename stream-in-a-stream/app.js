// https://github.com/ReactiveX/rxjs#cdn

const { fromEvent } = rxjs;
const { map, filter } = rxjs.operators;

let elem = document.getElementById("input");

let keyStream$ = fromEvent(elem, "keyup").pipe(map(ev => ev.key));

keyStream$.subscribe(key => console.log(key));

// emits entered key chars
