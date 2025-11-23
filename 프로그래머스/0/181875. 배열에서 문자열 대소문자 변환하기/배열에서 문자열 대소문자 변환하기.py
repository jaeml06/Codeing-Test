def solution(strArr):
    answer = []
    for idx, word in enumerate(strArr):
        if idx % 2 == 0:
            answer.append(word.lower())
        else:
            answer.append(word.upper())
        
    return answer