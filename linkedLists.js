// This code is a 'solution' to The Odin Project's Linked Lists Project, part of their Computer Science course.

  const Node = (value) => {
  return {
    value: value,
    next: null,
  }
}
  
const LinkedList = () => {
  let HEAD = null;
  let TAIL = null;
  let length = 0;
 
  const append = (value) => {
    let newNode = Node(value);
    length++;
    
    if (HEAD === null) {
      HEAD = newNode;
      TAIL = newNode;
    } else {
      TAIL.next = newNode;
      TAIL = newNode;
    }
  } 
  
  const prepend = (value) => {
    let newNode = Node(value);
    length++;
    
    if (HEAD === null) {
      HEAD = newNode;
      TAIL = newNode;
    } else {
      newNode.next = HEAD;
      HEAD = newNode;
    }
  }
  
    const at = (index) => {
    let indexCount = 0;
    let current = HEAD;
    
    while(indexCount < index) {
      current = current.next;
      indexCount++
    }    
      return current
  }
  
  const pop = () => {
       let current = HEAD;
       let nextPointer = HEAD.next;
       
       while (nextPointer.next !== null) {
         current = current.next; 
         nextPointer = nextPointer.next;
        }
        current.next = null;
        TAIL = current;
        length--
    }
  
  const contains = (value) => {
    let current = HEAD;
    let nextPointer = HEAD.next;
    
    while(nextPointer.next !== null) {
      current = current.next;
      nextPointer = nextPointer.next;
      
      if (current.value === value) {
        return current
      }
    }    
  }
  
  const find = (value) => {
 
    let indexCount = 0;
    let current = HEAD;
    
    while(current.value !== value) {
      current = current.next;
      indexCount++
    }    
      return `The index of ${value} is ${indexCount}`;   
  }
  
  const toString = () => {
    let current = HEAD;
    let arr = [];
    
    while (current) {
      arr.push(`(${current.value}) -> `)
      if (current.next === null) {
        arr.push('null')
      }
      current = current.next;
    }  
    let string = arr.toString()
    return string.replace(/,/g, '');
    
  }
  
  return {append, prepend, at, pop, contains, find, toString, get length(){ return length; }, get head(){ return HEAD; }, get tail(){ return TAIL; }}
}

const list = LinkedList();
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.prepend(1)
list.pop()

console.log('this is the head', list.head)
console.log('this is the tail', list.tail)
console.log('this is the length', list.length)
console.log('this is value', list.contains(3))
console.log('this is index', list.at(1))
console.log('this is index', list.at(0))
console.log('this is find', list.find(3))
console.log('this is string', list.toString())




