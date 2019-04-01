class Set {
  constructor(){
    this.setArray = []
    this.arrSize = 0
  }
  isEmpty(){
    return this.arrSize === 0;
  }
  add(){
    this.arrSize++;
  }
  remove(){
    this.arrSize--;
  }
}
module.exports = Set;
