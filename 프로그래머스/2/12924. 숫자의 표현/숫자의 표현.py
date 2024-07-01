def solution(n):
    answer = 0
    for i in range(1, n+1):
        count = i
        sum_sd = 0
        while sum_sd < n:
            sum_sd += count
            count += 1
        if sum_sd == n:
            print(i)
            answer += 1
                   
    return answer