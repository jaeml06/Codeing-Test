def solution(participant, completion):
    h_m = {}
    for p in participant:
        h_m[p] = h_m.get(p, 0) + 1
    for c in completion:
        h_m[c] -= 1
    for k, v in h_m.items():
        if v != 0:
            return k

