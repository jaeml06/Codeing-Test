def solution(picture, k):
    answer = []
    
    for row in picture:
        temp = ''.join(ch * k for ch in row)
        for _ in range(k):
            answer.append(temp)

    return answer