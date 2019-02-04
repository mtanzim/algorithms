import QuickFindEager from "./QuickFind";
import QuickUnionLazy from "./QuickUnion";
import UnionFind from "./UnionFind";

const test = (model: UnionFind):void => {
  console.log(model.toStr());
  model.union(0, 8);
  console.log(model.toStr());
  model.union(3, 4);
  console.log(model.toStr());
  model.union(5, 6);
  console.log(model.toStr());
  model.union(0, 6);
  console.log(model.toStr());
};

/* const testQuickUnion: () => void = () => {
  const quickUnion = new QuickUnionLazy(9);
  console.log(quickUnion.toStr());
} */

test(new QuickFindEager(9));
// test(new QuickUnionLazy(9));
// testQuickUnion();