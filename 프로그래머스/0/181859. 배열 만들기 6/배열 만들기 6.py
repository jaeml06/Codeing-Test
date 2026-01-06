def solution(arr):
    stk = []
    for v in arr:
        if not stk:
            stk.append(v)
        else:
            if stk[-1] == v:
                stk.pop()
            else:
                stk.append(v)
    return stk if stk else [-1]