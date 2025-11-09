def solution(n, words):
    for idx, word in enumerate(words):
        if idx == 0:
            continue
        if word in words[:idx] or words[idx-1][-1] != word[0]:
            return [(idx % n) + 1, (idx // n) + 1]
    return [0, 0]