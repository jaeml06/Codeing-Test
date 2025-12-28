def solution(participant, completion):
    p_m = {}
    for p in participant:
        p_m[p] = p_m.get(p, 0) + 1
    for c in completion:
        p_m[c] -= 1
    for k, v in p_m.items():
        if v > 0:
            return k

