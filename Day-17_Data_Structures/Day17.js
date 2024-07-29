/**
 * Activity 1: Linked List
 */

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
console.log("*** Task 1 ***");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

console.log(node1);
console.log(node2);

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
console.log("*** Task 2 ***");

class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node2(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    remove() {
        if (this.head === null) {

            return null;
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;

    }

    display() {
        let current = this.head;
        let output = "";
        while (current !== null) {
            output += current.value + " -> ";
            current = current.next;
        }
        output += "null";
        console.log(output);
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();

list.remove();
list.remove();
list.display();


/**
 * Activity 2: Stack
 */

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

console.log("*** Task 3 ***")
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(" -> "));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();
console.log(stack.peek());
console.log(stack.pop());
stack.display();

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then poping them off.
console.log("*** Task 4 ***");

class StackReverse {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(" -> "));
    }
}

function reverseString(input) {
    const stack = new StackReverse();

    for (let char of input) {
        stack.push(char);
    }
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed;
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(`Original String : ${originalString}`)
console.log(`Reversed String : ${reversedString}`)

/**
 * Activity 3: Queue
 */

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
console.log("*** Task 5 ***")

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(" -> "));
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display(); 

console.log(queue.front()); 

console.log(queue.dequeue());
queue.display(); 

console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
console.log(queue.dequeue());

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
console.log("*** Task 6 ***")
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addPrintJob(job) {
        this.queue.enqueue(job);
        console.log(`Added print job: ${job}`);
        this.displayQueue();
    }

    processPrintJob() {
        if (this.queue.isEmpty()) {
            console.log('No print jobs to process.');
            return;
        }
        const job = this.queue.dequeue();
        console.log(`Processing print job: ${job}`);
        this.displayQueue();
    }

    displayQueue() {
        console.log('Current print queue:');
        this.queue.display();
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob('Document1.pdf');
printerQueue.addPrintJob('Photo.jpg');
printerQueue.addPrintJob('Resume.docx');

printerQueue.processPrintJob(); // Processing Document1.pdf
printerQueue.processPrintJob(); // Processing Photo.jpg
printerQueue.processPrintJob(); // Processing Resume.docx
printerQueue.processPrintJob(); // No print jobs to process.

/**
 * Activity 4: Binary Tree
 */

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
console.log("*** Task 7 ***")

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(4);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(4);
console.log(root);


// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
console.log("*** Task 8 ***")

class TreeNode1 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode1(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);


console.log('In-order traversal:');
tree.inOrderTraversal();

/**
 * Activity 5: Graph (Optional)
 */

// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(startingVertex) {
        const queue = [startingVertex];
        const result = [];
        const visited = {};

        visited[startingVertex] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');


console.log('Breadth-First Search starting from vertex A:');
console.log(graph.bfs('A'));


// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
class Graph2 {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    bfsShortestPath(startingVertex, targetVertex) {
      const queue = [[startingVertex]];
      const visited = {};
  
      visited[startingVertex] = true;
  
      while (queue.length) {
        const path = queue.shift();
        const vertex = path[path.length - 1];
  
        if (vertex === targetVertex) {
          return path;
        }
  
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            const newPath = [...path, neighbor];
            queue.push(newPath);
          }
        });
      }
  
      return null; 
    }
  }
  
  const g = new Graph2();
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');
  
  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('B', 'D');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  g.addEdge('D', 'F');
  g.addEdge('E', 'F');
  
  const shortestPath = g.bfsShortestPath('A', 'F');
  console.log('Shortest path from A to F:', shortestPath); 