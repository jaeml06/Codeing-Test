def solution(order):
    answer = 0

    for ord in order:
        if 'americano' in ord:
            answer += 4500
        elif 'afelatte' in ord:
            answer += 5000
        else:
            answer+= 4500
    return answer