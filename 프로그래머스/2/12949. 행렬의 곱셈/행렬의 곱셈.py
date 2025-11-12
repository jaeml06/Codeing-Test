def solution(arr1, arr2):
    m, k, n = len(arr1), len(arr1[0]), len(arr2[0])
    answer = []
    for i in range(m):
        temp = []
        for j in range(n):
            s = 0
            for t in range(k):
                s += arr1[i][t] * arr2[t][j]
            temp.append(s)
        answer.append(temp)
    return answer