def solution(s):
    stack = []
    for str in s:
        if(str == '('):
            stack.append(')')
        elif not stack or stack.pop() != str:
            return False
    return not stack

    
    

    return True