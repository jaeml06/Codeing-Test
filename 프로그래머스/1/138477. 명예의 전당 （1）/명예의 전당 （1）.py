def solution(k, score):
    answer = []
    temp = []
    for val in score:
        
        if len(temp) < k:
            temp.append(val)
            temp.sort(reverse=True)
            answer.append(temp[-1])
        else:
            temp.append(val)
            temp.sort(reverse=True)
            answer.append(temp[k-1])
    return answer