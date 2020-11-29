function HashTable() {
  this.SIZE = 16;
  this.storage = new Array(this.SIZE);
  this.currentStorage = 0;
}

// stores a value in the storage array
// hint: use the hash function to determine where in the array to store the value
HashTable.prototype.set = function (key, value) {
  //find the index to store value in by using hash function
  const index = hashCode(key, this.SIZE);
  //check if anything is stored at [index] in this.storage array
  //if something is already at index, store value in that obj
  if (this.storage[index]) {
    this.storage[index][key] = value;
    this.currentStorage++;
    // = undefined
  } else {
    //if nothing is at index, initialize it to {} and store key value pair
    this.storage[index] = {};
    this.storage[index][key] = value;
    this.currentStorage++;
  }
  if (this.currentStorage / this.SIZE >= 0.75) this.rehash(true);
};

// return a previously stored value
HashTable.prototype.get = function (key) {
  //get the index using hash function
  const index = hashCode(key, this.SIZE);
  //check if anything is stored at index with this given key, if yes, return the value
  if (this.storage[index]) return this.storage[index][key];
};

//returns and removes a key from the hash table
HashTable.prototype.remove = function (key) {
  const index = hashCode(key, this.SIZE);
  const removedValue = this.storage[index][key];
  //if there is something stored at index
  if (this.storage[index]) {
    //if key value pair is not nested in an obj (obj has only 1 key-value pair)
    if (Object.keys(this.storage[index]).length === 1) {
      //remove the object by using slice
      this.storage = [
        ...this.storage.slice(0, index),
        ...this.storage.slice(index + 1, -1),
      ];
      this.currentStorage--;
      //if key value pair is stored inside an obj (more than 1 pair)
    } else if (Object.keys(this.storage[index]).length > 1) {
      delete this.storage[index][key];
    }
  }
  if (this.currentStorage / this.SIZE <= 0.25 && this.SIZE >= 16)
    this.rehash(false);
  return removedValue;
};

HashTable.prototype.rehash = function (size) {
  //get new size
  size ? (this.SIZE *= 2) : (this.SIZE = Math.ceil(this.SIZE / 2));
  //store old storage in a variable
  const oldStorage = this.storage;
  //reinitialize storage to be empty
  this.storage = new Array(this.SIZE);
  this.currentStorage = 0;
  //loop through old storage
  oldStorage.forEach((obj) => {
    if (obj) {
      for (let key in obj) {
        const value = obj[key];
        const index = hashCode(key, this.SIZE);
        if (!this.storage[index]) {
          this.storage[index] = {};
          this.storage[index][key] = value;
        } else {
          this.storage[index][key] = value;
          this.currentStorage++;
        }
      }
    }
  });
};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size) {
  let hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    const letter = string.charCodeAt(i);
    hash = (hash << 5) - hash + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size;
}

const hash = new HashTable();
for (let i = 0; i < 30; i++) {
  const key = 'key ' + i;
  const value = 'value ' + i;
  hash.set(key, value);
}
hash.remove('key 3');
hash.remove('key 6');
hash.remove('key 8');
hash.remove('key 9');
hash.remove('key 10');
console.log(hash.remove('key 4'));
