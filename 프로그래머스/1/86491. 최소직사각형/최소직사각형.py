def solution(sizes):
    max_w = 0
    max_h = 0

    for w, h in sizes:
        big = max(w, h)
        small = min(w, h)

        max_w = max(max_w, big)
        max_h = max(max_h, small)

    return max_w * max_h