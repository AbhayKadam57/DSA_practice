class HashTable {
  constructor() {
    this.values = {};
  }

  put(key, value) {
    this.values[key] = value;
  }

  get(key) {
    return this.values[key];
  }

  remove(key) {
    delete this.values[key];
  }

  has(key) {
    return Object.has(this.values[key]);
  }

  clear() {
    return (this.value = {});
  }

  size() {
    return Object.keys(this.values).length;
  }

  keys() {
    return Object.keys(this.values);
  }

  values() {
    return Object.values(this.values);
  }

  print() {
    console.log(this.values);
  }
}

let a = new HashTable();

a.put("Name", "Abhay");
a.put("Age", "28");

console.log(a.get("Name"));
