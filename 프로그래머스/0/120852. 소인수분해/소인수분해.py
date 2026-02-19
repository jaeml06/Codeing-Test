def solution(n):
    answer = []
    div = 2
    while n > 1:
        if n % div == 0:
            answer.append(div)
            n//=div
        else:
            div+= 1
            
    return sorted(list(set(answer)))
