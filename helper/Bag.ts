import Iterable from './Iterable';


export default class Bag<T> implements Iterable <T> {

  // prevent modifying bag
  private bag: Array<T>;
  private position: number;

  constructor() {
    this.bag = [];
    this.position = 0;
  }

  add(item: T) {
    if (!this.bag.some(a=> a===item)) this.bag.push(item);
  }

  isEmpty(): boolean {
    return (this.bag.length === 0);
  }

  getSize(): number {
    return this.bag.length;
  }

  next(): T {
    let item = this.bag[this.position];
    this.position++;
    return item;
  }

  resetPosition() {
    this.position = 0;
  }

  hasNext(): boolean {
    return (this.position !== this.bag.length);
  }

  getArrRep() {
    return [].concat(this.bag);
  }

}

function driver(): void {

  let bag = new Bag<{name: string, phone: number}>();
  bag.add({name:'Tanzim', phone:45667});
  bag.add({name:'Tanzim', phone:45667});
  bag.add({name:'Tanzim', phone:45667});
  bag.add({name:'Tanzim', phone:45667});
  // bag.add(['a', 2, 5]);
  // bag.add('Hello');
  // bag.add({ text: 'Hi', num: 45 });

  // console.log(bag);

  console.log(bag.hasNext() && bag.next());
  console.log(bag.hasNext() && bag.next());
  console.log(bag.hasNext() && bag.next());
  console.log(bag.hasNext() && bag.next());
  console.log(bag.hasNext() && bag.next());
  bag.resetPosition();
  console.log(bag.hasNext() && bag.next());

}


// driver();
