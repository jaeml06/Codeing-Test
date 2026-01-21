def solution(rank, attendance):
    candidates = []

    for i in range(len(rank)):
        if attendance[i]:
            candidates.append((rank[i], i))

    candidates.sort(key=lambda x: x[0])
    print(candidates)
    return 10000 * candidates[0][1] + 100 * candidates[1][1] + candidates[2][1]