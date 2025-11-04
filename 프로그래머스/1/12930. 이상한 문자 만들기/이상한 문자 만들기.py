def solution(s):
    answer = []
    words = s.split(' ')
    for word in words:
        temp = ''
        for idx, char in enumerate(word):
            if idx%2 == 0:
                temp += char.upper()
            else:
                temp += char.lower()
        answer.append(temp)
            
    return ' '.join(answer)