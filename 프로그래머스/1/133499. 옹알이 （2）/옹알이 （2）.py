def solution(babbling):
    words = ["aya", "ye", "woo", "ma"]
    answer = 0

    for b in babbling:
        i = 0
        prev = ""
        ok = True

        while i < len(b):
            matched = False

            for w in words:
                if b.startswith(w, i) and w != prev:
                    prev = w
                    i += len(w)
                    matched = True
                    break

            if not matched:
                ok = False
                break

        if ok:
            answer += 1

    return answer