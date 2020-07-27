/**
 * 탐색해서 가장 짧은 bfs
 */
function solution(begin, target, words) {
  var answer = 0;

  const visited = Array(words.length).fill(false);
  const queue = [begin];

  while (queue.length) {
    const current = queue.pop();

    if (current === target) return answer;

    for (let i = 0; i < words.length; i++) {
      if (canChange(current, words[i]) && !visited[i]) {
        visited[i] = true;
        queue.push(words[i]);
      }
    }

    answer = answer + 1;
  }

  return 0;
}

const canChange = (from = "", to = "") => {
  let count = 0;

  for (let i = 0; i < from.length; i++) {
    if (from[i] !== to[i]) count++;
    if (count > 1) return false;
  }

  return true;
};

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
