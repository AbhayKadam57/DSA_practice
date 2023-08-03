class Hashtable {
  constructor(size) {
    this.table = {};
    this.size = size;
  }

  calculateHash(val) {
    return val % this.size;
  }

  add(val) {
    let hash = this.calculateHash(val);

    if (this.table[hash] === undefined) {
      this.table[hash] = val;
    } else {
      let i = 0;

      while (this.table[hash] !== undefined && i <= this.size) {
        hash += 1;
        hash = this.calculateHash(hash);
        i++;
      }

      if (i > this.size) {
        return "outofIndex";
      } else {
        this.table[hash] = val;
      }
    }
  }

  contains(val) {
    let hash = this.calculateHash(val);

    if (this.table[hash] === val) {
      return true;
    } else {
      let i = 0;

      while (this.table[hash] !== undefined && i <= this.size) {
        hash += 1;
        hash = this.calculateHash(hash);
        i++;
      }

      if (this.table[hash] === val) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let a = new Hashtable(51);

a.add(4);
a.add(8);
a.add(12);

console.log(a);

console.log(a.contains(16));
