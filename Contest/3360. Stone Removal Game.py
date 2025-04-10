class Solution:
    def canAliceWin(self, n: int) -> bool:
        stoneMoved = 10
        isAliceTurn = True
        if n <= 0:
            return False
        while n > 0 and n >= stoneMoved:
            n = n - stoneMoved
            stoneMoved -= 1
            isAliceTurn = not isAliceTurn
        return False if isAliceTurn else True
                
            
            