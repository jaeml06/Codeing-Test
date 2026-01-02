def solution(ingredient):
    answer = 0
    barger = []
    for i in ingredient:
        barger.append(i)
        if barger[-4:] == [1, 2, 3, 1]:
            answer+=1
            del barger[-4:]
    return answer