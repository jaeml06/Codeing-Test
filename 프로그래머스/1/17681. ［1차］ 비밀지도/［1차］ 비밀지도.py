def solution(n, arr1, arr2):
    answer = []
    grid1 = [str(bin(v)[2:]).zfill(n) for v in arr1]
    grid2 = [str(bin(v)[2:]).zfill(n) for v in arr2]
    for g1, g2 in zip(grid1, grid2):
        temp = ''
        for v1, v2 in zip(g1, g2):
            if v1 == '0' and v2 == '0':
                temp += ' '
            else:
                temp += '#'
        answer.append(temp)
            
    return answer