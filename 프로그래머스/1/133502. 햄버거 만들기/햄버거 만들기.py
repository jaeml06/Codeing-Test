from collections import deque
def solution(ingredient):
    answer = 0
    barger = []
    for i in ingredient:
        barger.append(i)
        if barger[-4:] == [1,2,3,1]:
            del barger[-4:]
            answer +=1
    return answer