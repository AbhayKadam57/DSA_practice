class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(val) {
    return val % this.size;
  }

  add(val) {
    let hash = this.calculateHash(val);

    if (this.values[hash] !== undefined) {
      this.values[hash] = val;
    } else {
      let i = 0;

      while (this.values[hash] !== undefined && i <= this.size) {
        hash += 1;

        hash = hash % this.size;

        i++;
      }

      console.log(hash);

      if (i > this.size) {
        return "OutOfIndex";
      } else {
        this.values[hash] = val;
      }
    }
  }

  search(val) {
    let hash = this.calculateHash(val);

    if (this.values[hash] === val) {
      return true;
    } else {
      let i = 0;

      while (this.values[hash] !== val && i <= this.size) {
        hash += 1;
        hash = this.calculateHash(hash);
        i++;
      }

      if (this.values[hash] === val) {
        return true;
      } else {
        return false;
      }
    }
  }

  print() {
    console.log(this.values);
  }
}

let my = new HashTable(251);

my.add(1);
my.add(2);

console.log(my.search(5));

my.print();

// // remove duplicates

// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// let a = new HashTable(251);

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   let curr = arr[i];

//   if (!a.search(curr)) {
//     a.add(curr);

//     result.push(curr);
//   }
// }

// console.log(result);

// //find intercepts

// let arr1 = [1, 2, 4, 7, 5, 4];

// let arr2 = [1, 3, 8, 5, 7];

// let h = new HashTable(251);

// let intercepts = [];

// for (let i = 0; i < arr1.length; i++) {
//   let curr = arr1[i];

//   if (!h.search(curr)) {
//     h.add(curr);
//   }
// }

// for (let i = 0; i < arr2.length; i++) {
//   let curr = arr2[i];

//   if (h.search(curr)) {
//     intercepts.push(curr);
//   }
// }

// console.log(intercepts);
