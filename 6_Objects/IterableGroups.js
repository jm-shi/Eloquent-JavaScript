/*
Make the Group class from the previous exercise iterable. Refer to the section 
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the 
iterator created by calling the Symbol.iterator method on the array. That would
work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during
iteration.
*/

class Group {
  constructor() {
    this.items = [];
  }

  add(val) {
    if (!this.has(val)) {
      this.items.push(val);
    }
  }

  delete(val) {
    if (this.items.includes(val)) {
      const removeIndex = this.items.indexOf(val);
      this.items.splice(removeIndex, 1);
    }
  }

  has(val) {
    return this.items.includes(val);
  }

  static from(arr) {
    let group = new Group();
    for (let item of arr) {
      group.add(item);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index >= this.group.items.length) return { done: true };

    let value = { value: this.group.items[this.index], done: false };
    this.index++;
    return value;
  }
}

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
