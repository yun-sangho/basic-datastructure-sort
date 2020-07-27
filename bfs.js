"use strict";
const LinkedList = require("./LinkedList.js");
const Node = require("./Node.js");
const Queue = require("./Queue.js");
const Graph = require("./Graph.js");

//Create Queue => let queue = new Queue(5), where 5 is size of queue
//Functions of Queue => queue.enqueue(int), queue.dequeue(), queue.isEmpty()
//Breadth First Traversal of Graph g from source vertex
function bfsTraversal(g, source) {
  let result = "";
  let num_of_vertices = g.vertices;

  // a list to record visited nodes in a graph
  const visited = [];

  for (let x = 0; x < num_of_vertices; x++) {
    visited.push(false);
  }

  const queue = new Queue(num_of_vertices);

  for (let i = source; i < num_of_vertices; i++) {
    if (!visited[i]) {
      visited[i] = true;
      queue.enqueue(i);

      while (!queue.isEmpty()) {
        const current = queue.dequeue();
        result = result + current;

        const edges = g.list[current];

        let temp = edges.getHead();

        while (temp) {
          if (!visited[temp.data]) {
            visited[temp.data] = true;
            queue.enqueue(temp.data);
          }
          temp = temp.nextElement;
        }
      }
    }
  }

  return result;
}

let g1 = new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
console.log(bfsTraversal(g1, 1));
