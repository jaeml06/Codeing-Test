def solution(emergency):
    sorted_emergency = sorted(emergency, reverse=True)
    rank= {v: i + 1 for i, v in enumerate(sorted_emergency)}
    return [rank[v] for v in emergency]