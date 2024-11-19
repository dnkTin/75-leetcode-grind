// let x = 'ABCD', let y = 'AC' => return true else return false
const isSubsequence = (x, y) => {
  let yPointer = 0;
  for (let i = 0; i < x.length; i++) {
    if (y[yPointer] && y[yPointer] === x[i]) {
      yPointer++;
    }
    if (yPointer = y.length) {
      return true;
    }
  }
  return false;
}

// friend connection, 
// connections = ["fred:joe", "joe:mary", "mary:fred", "mary:bill"
// name1 = "fred", name2=""bill
// result 2
// approach: parse the connections to build adjacency list and then do bfs to find the shortest path
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
/*
fred: [joe, mary]
joe: [fred, mary],
mary: [joe, fred, bill]

//1 queue: [fred, 0], visited: [fred]
//2 queue: [joe, 1], visited: [fred, joe]
//3 queue: [mary, 2], visited: [fred, joe, mary]
//4 queue: [bill, 3], visited: [fred, joe, mary, bill]
// return 3
*/

const throttle = (func, delay) => {
  let throttled = false;
  return (...args) => {
    if (!throttled) {
      func(...args);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, delay)
    }
  }
}

import React, { useState, useEffect, useCallback } from 'react';
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay)
  }
}

const FetchItemComponent = ({onSelectItem}) => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchItems = useCallback(debounce(
    async (query) => {
      if (!query) {
        setItems([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get('https://api.com/items', {params: {query}});
        setItems(response.data);
      } catch(error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }, 500
  ), [])

  useEffect(() => {
    fetchItems(query);

    return () => {
      fetchItems.cancel();
    }
  }, [query, fetchItems])

  const handleChange = (e) => {
    setQuery(event.target.value);
  }

  return (
    <>
      <div className="wrapper">
        <div className={`control ${isLoading ? 'is-loading' : ''}`}>
          <input type="text" onChange={handleChange} value={query} />
        </div>
        { items.length > 0 && (
          <div className="list">
            { items.map( item => (
              <a key={item}>{item}</a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}