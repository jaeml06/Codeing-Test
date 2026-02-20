def solution(spell, dic):
    target = ''.join(sorted(spell))
    
    for w in dic:
        if len(w) != len(target):
            continue
        if ''.join(sorted(w)) == target:
            return 1
    return 2