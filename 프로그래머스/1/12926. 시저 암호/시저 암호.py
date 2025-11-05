def solution(s, n):
    answer = ''
    for ch in s:
        if 'a' <= ch and ch <= 'z':
            answer += chr(((ord(ch) + n) - 97) % 26 + 97)
        elif 'A' <= ch and ch <= 'Z':
            answer += chr(((ord(ch) + n) - 65) % 26 + 65)
        else:
            answer += ch
    return answer