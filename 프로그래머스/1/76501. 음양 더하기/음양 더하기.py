def solution(absolutes, signs):
    answer = 0
    for index, value in enumerate(absolutes):
        answer+= int(f"{ '' if signs[index] else '-'}{value}")
    return answer
        
        