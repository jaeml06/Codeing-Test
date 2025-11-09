def solution(n, arr1, arr2):
    answer = []
    map1 = [str(bin(val)[2:]).zfill(n) for val in arr1]
    map2 = [str(bin(val)[2:]).zfill(n) for val in arr2]
    for m1, m2 in zip(map1, map2):
        temp = ''
        for t1, t2 in zip(m1, m2):
            if t1 == '0' and t2 == '0':
                temp += ' '
            else:
                temp += '#'
        answer.append(temp)
            
    return answer