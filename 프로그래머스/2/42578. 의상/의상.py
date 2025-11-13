def solution(clothes):
    temp = {}
    for val, key in clothes:
        if key not in temp:
            temp[key] = []
        temp[key].append(val)
    answer = 1
    
    for key in temp:
        answer *= (len(temp[key]) + 1)  # 입지 않는 선택 +1

    return answer - 1