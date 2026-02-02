def solution(elements):
    n = len(elements)
    set1 = set()
    
    for i in range(n):
        temp = elements[i]
        set1.add(temp)
        for j in range(i + 1, i + n):
            temp += elements[j % n]
            set1.add(temp)
    return len(set1)
        