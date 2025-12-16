def solution(myString, pat):
    converted = ''.join('B' if c == 'A' else 'A' for c in myString)
    return 1 if pat in converted else 0