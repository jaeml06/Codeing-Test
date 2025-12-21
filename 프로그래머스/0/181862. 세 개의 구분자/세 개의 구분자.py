def solution(myStr):
    for ch in ['a', 'b', 'c']:
        myStr = myStr.replace(ch, ' ')
    arr = myStr.split()
    if arr:
        return arr
    return ["EMPTY"]