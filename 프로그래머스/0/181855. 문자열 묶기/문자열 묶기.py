def solution(strArr):
    map1 = {}
    for s in strArr:
        temp = len(s)
        if temp in map1:
            map1[temp] += 1
        else:
            map1[temp] = 1
    return max(map1.values())