def solution(s):
    answer = []
    words = s.split(' ')
    for word in words:
        temp = ''
        for idx, s in enumerate(word):
            if idx % 2 == 0:
                temp += s.upper()
            else:
                temp += s.lower()
        answer.append(temp)
    return ' '.join(answer)