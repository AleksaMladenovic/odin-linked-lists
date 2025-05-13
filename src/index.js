import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("elephant");

console.log("At 3th index is:" + list.at(3).value);
// console.log("We are poping:"+list.pop().value);
console.log("Hamster is at:"+ list.find("hamster")+" index");
list.insertAt("giraffe",2);
console.log("Deleting the cat at the index 3");
list.removeAt(3);
console.log("Insert at 2 giraffe");
console.log("Head:"+list.head.value);
console.log("Tail:"+list.tail.value);
console.log("list size:" + list.size);
console.log(list.toString());