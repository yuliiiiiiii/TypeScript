type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

type Family<T> = {
  parents: [T, T],
  mate: T,
  children: T[]
};

let theFamily: Family<number> = {parents: [3, 4], mate: 9, children: [5, 30, 121]};
let someFamily: Family<boolean> = {parents: [true, true], mate: false, children: [false, false, true, true]}

let aFamily: Family<Human> = {
  parents: [{name: 'Mom', job: 'software engineer'}, {name: 'Dad', job: 'coding engineer'}],
  mate: {name: 'Matesky', job: 'engineering'},
  children: [{name: 'Babe', job: 'none'}]
};

let anotherFamily: Family<Dog> = {
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
}; 