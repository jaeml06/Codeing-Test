def solution(keymap, targets):
    answer = []
    max_len = max(len(s) for s in keymap)
    result = []

    for i in range(max_len):
        temp = set()
        for s in keymap:
            if i < len(s):
                temp.add(s[i])
        result.append(temp)
    
    
    for target in targets:
        cnt = 0
        ok = True
        for ch in target:
            found = False
            for idx, sset in enumerate(result):
                if ch in sset:
                    cnt += idx + 1
                    found = True
                    break
            if not found:
                ok = False
                break
        answer.append(cnt if ok else -1)
    return answer