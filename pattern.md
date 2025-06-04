```python
# two pointer

sort()
while left < right
  if ...
    # neu thoa man dieu kien roi thif giam right xuong
    # target => se di theo right - left
    right -= 1
  else
    # het tim duoc nua roi thi tang left len
     left += 1
```

#binary search


dfs hay bfs sẽ có hai dạng (841)
một là kiểu queue, pop ra
dạng hai là kiểu cycle, dùng đệ quy

BFS is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say l) are explored before moving on to the nodes at the next level (l + 1). BFS is implemented with a queue.

dfs => USING backtrack -> RECURSIVE
bfs => USING DEQUE
bfs
  1. current visit
  2. visited
  3. topologi data
  4. loop the current visit to find another 
     1. check if 
the BFS strategy prioritizes the breadth over depth, i.e. it goes wider before it goes deeper.