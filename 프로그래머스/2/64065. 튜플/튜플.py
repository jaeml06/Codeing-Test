def solution(s):
    s = s[2:-2].split("},{")
    sets = [list(map(int, part.split(','))) for part in s]
    sets.sort(key=lambda x: len(x))
    answer = []
    set1 = set()
    for group in sets:
        for num in group:
            if num not in set1:
                set1.add(num)
                answer.append(num)
    return answer