"""
const friendConnection = (connections, name1, name2) => {
  let graph = {}
  for (const connection of connections) {
    const [personA, personB] = connection.split(':');
    if (!graph[personA]) {
      graph[personA] = [];
    }
    if (!graph[personB]) {
      graph[personB] = [];
    }
    graph[personA].push(personB); // fred: [joe, mary]
    graph[personB].push(personA); // joe: [fred, mary], mary: [fred, bill, joe]
  }

  let queue = [[name1, 0]];
  let visited = new Set();

  // y tuong la minh tao 1 cai queue va minh duyet qua mang friends roi update degree cho tung nguoi
  while (queue.length > 0) {
    let [currentPerson, degree] = queue.shift();
    for (const friend of graph[currentPerson]) {
      if (friend === name2) {
        return degree + 1;
      }
      if (!visited.has(friend)) {
        visited.add(friend);
        queue.push([friend, degree + 1]);
      }
    }
  }
  return -1;
}
friendConnection(["fred:joe", "joe:mary", "mary:fred", "mary:bill"], "fred", "bill"); // 2
"""