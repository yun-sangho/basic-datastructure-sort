"use strict";
const LinkedList = require("./LinkedList.js");
const Node = require("./Node.js");
const Stack = require("./Stack.js");
const Graph = require("./Graph.js");
//You can check the input graph in console tab

//Create Stack => let stack = new Stack(5), where 5 is the size of the stack
//Functions of Stack => stack.push(int),stack.pop(),top(),isEmpty()
//class graph => {int vertices, linkedList[] list}
//class linkedList => {Node head}
//class Node => {int data, Node nextElement}
//Depth First Traversal of Graph "g" from source vertex

function dfsTraversal(g, source) {
  let result = "";
  let num_of_vertices = g.vertices;
  // Write code here
  const visited = [];
  const stack = new Stack(num_of_vertices);

  for (let i = 0; i < num_of_vertices; i++) {
    visited[i] = false;
  }

  for (let record = source; record < num_of_vertices; record++) {
    if (!visited[record]) {
      visited[record] = true;
      stack.push(record);

      while (!stack.isEmpty()) {
        const current = stack.pop();
        result = result + current;
        const edges = g.list[current];

        let temp = edges.getHead();

        while (temp) {
          if (!visited[temp.data]) {
            visited[temp.data] = true;
            stack.push(temp.data);
          }
          temp = temp.nextElement;
        }
      }
    }
  }

  return result;
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
console.log(dfsTraversal(g, 0));
