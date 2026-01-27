def solution(s):
    num = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }

    answer = ''
    temp = ''
    
    for ch in s:
        if ch.isalpha():
            temp += ch
            if temp in num:
                answer += num[temp]
                temp = ''
        else:
            answer += ch
    
    return int(answer)