    
[[1,3],[3,0,1],[2],[0]]
seen = [False, False, False, False]
seen = [True, False, False, False]
current seen =[True, True, False, True]
stack = [0]
node = 0
nei in rooms[0] [1,3]
seen[1] = True
seen[3] = True 
stack = [1,3]
--loop 2
node = 3, stack = [1]
nei in room[3] = [0]
seen[0]
node = 1 stack = []
rooms[1] = [3,0,1] => already seen = [True, True, False, True]


class Solution(object):
    def canVisitAllRooms(self, rooms):
        seen = [False] * len(rooms)
        seen[0] = True
        stack = [0]
        #At the beginning, we have a todo list "stack" of keys to use.
        #'seen' represents at some point we have entered this room.
        while stack:  #While we have keys...
            node = stack.pop() # get the next key 'node'
            for nei in rooms[node]: # For every key in room # 'node'...
                if not seen[nei]: # ... that hasn't been used yet
                    seen[nei] = True # mark that we've entered the room
                    stack.append(nei) # add the key to the todo list
        return all(seen) # Return true iff we've visited every room
    
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        seen = [False] * len(rooms)
        seen[0] = True
        # we can open the first room so that:
        stack = [0]
        # when opening the room in the stack, we will try to get the key in there
        # when stack is empty, that mean we don't have any room to open
        # we will check in the seen (visited room), which room has been not visited
        while stack:
            currentRoom = stack.pop() # first will be zero
            # get key for current room
            for key in rooms[currentRoom]:
                if not seen[key]:
                    seen[key] = True
                    stack.append(key)
        return all(seen)