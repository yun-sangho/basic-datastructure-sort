function solution(n, computers) {
  var answer = 0;

  const visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer = answer + 1;
      visited[i] = true;
      traverse(i, computers, visited);
    }
  }

  return answer;
}

const traverse = (index, computers, visited) => {
  computers[index].forEach((el, i) => {
    if (el === 1 && !visited[i]) {
      visited[i] = true;
      traverse(i, computers, visited);
    }
  });
};

const result = solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

console.log(result);
