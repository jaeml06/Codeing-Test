def solution(N, stages):
    answer = []
    map1 = {}
    n_stages = len(stages)
    for val in stages:
        if val in map1:
            map1[val] += 1
        else:
            map1[val] = 1
    
    for i in range(1, N + 1):
        if i in map1:
            answer.append((i, map1[i] / n_stages))
            n_stages -= map1[i]
        else:
            answer.append((i, 0))
    
    answer.sort(key=lambda x: (-x[1], x[0]))
    answer = [x[0] for x in answer]
    return answer