def solution(babbling):
    words = ["aya", "ye", "woo", "ma"]
    answer = 0
    
    for word in babbling:
        for w in words:
            word = word.replace(w, ' ')
        if word.strip() == '':
            answer += 1
    return answer