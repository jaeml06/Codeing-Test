def solution(s):
    answer = 0
    if len(s) % 2 == 1:
        return 0

    def can_right(string):
        temp = []
        for ch in string:
            if ch in '({[':
                temp.append(ch)
            else:
                if not temp:
                    return False
                if temp[-1] == '(' and ch == ')':
                    temp.pop()
                elif temp[-1] == '{' and ch == '}':
                    temp.pop()
                elif temp[-1] == '[' and ch == ']':
                    temp.pop()
                else:
                    return False
        return not temp
    
    for i in range(len(s)):
        rotated = s[i:] + s[:i]
        if can_right(rotated):
            answer += 1
        
    return answer