def solution(s):
    answer = 0
    if len(s) % 2 == 1:
        return 0
    def correct_right(string):
        stack = []
        for ch in string:
            if ch in '({[':
                stack.append(ch)
            else:
                if not stack:
                    return False
                if stack[-1] == '(' and ch == ')' or stack[-1] == '{' and ch == '}' or stack[-1] == '[' and ch == ']':
                    stack.pop()
                else:
                    return False
        return not stack

    for i in range(len(s)):
        rotated = s[i:] + s[:i]
        if correct_right(rotated):
            answer +=1
    return answer