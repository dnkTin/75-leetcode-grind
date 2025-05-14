class Solution:
    """
    [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],    0
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],    1
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],    2
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 0],    3
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],    4
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],    5
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],    6
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],    7
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],    8
    ]
    i = 0 visit = (0)
         dfs(0)
    j = 0 visited
    j = 1 dfs(1) visit(0, 1)
    j = 2 dfs(2)  visit(0, 1, 2)
    j = 3 dfs(3)  visit(0,1,2,3)
    j = 4 dfs(4)  visit(0,1,2,3,4)
    i = 5 dfs(5)  visit(0,1,2,3,4,5)
    i = 6 dfs(6)  visit(0,1,2,3,4,5,6)
    j = 7 dfs(7)
    j = 8 dfs(8)

    """
    def dfs(self, node, isConnected, visit):
        # 1. adding the city to the visited
        # 2. loop through all of city, to check the connection between those
        visit[node] = True
        for j in range(len(isConnected)):
            if isConnected[node][j] and not visit[j]:
                self.dfs(j, isConnected, visit)

    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        """
        1 1 0
        1 1 0
        0 0 1

        1 0 0 
        0 1 0
        0 0 1
        """
        size = len(isConnected)
        visit = [False] * size
        numberOfComponents = 0
        for i in range(size):
            if not visit[i]:
                numberOfComponents += 1
                self.dfs(i, isConnected, visit)
        return numberOfComponents


class Solution:
    def bfs(self, node, isConnected, visited):
        from collections import deque
        queue = deque([node])
        visited[node] = True
        while queue:
            node = queue.popleft()

            for i in range(len(isConnected)):
                if isConnected[node][i] == 1 and not visited[i]:
                    queue.append(i)
                    visited[i] = True
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        numberOfComponents = 0
        visited = [False] * n
        for i in range(n):
            if not visited[i]:
                numberOfComponents += 1
                self.bfs(i, isConnected, visited)
        return numberOfComponents
    
class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
        self.rank = [0] * size
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union_set(self, x, y):
        xset = self.find(x)
        yset = self.find(y)
        if self.rank[xset] < self.rank[yset]:
            self.parent[xset] = yset
        elif self.rank[xset] > self.rank[yset]:
            self.parent[yset] = xset
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        uf = UnionFind(n)
        numberOfComponents = n
        for i in range(n):
            for j in range(i + 1, n):
                if isConnected[i][j] == 1 and uf.find(i) != uf.find(j):
                    numberOfComponents -= 1
                    uf.union_set(i, j)
        return numberOfComponents