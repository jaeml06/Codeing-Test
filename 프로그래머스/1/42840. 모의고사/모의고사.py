def solution(answers):
    answer = []
    supo_randoms = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    count = [0, 0, 0]
    
    for i1, ans in enumerate(answers):
        for i2, supo_random in enumerate(supo_randoms):
            if ans == supo_random[i1 % len(supo_random)]:
                count[i2] += 1
    max_count = max(count)
    for idx, c in enumerate(count):
        if max_count == c:
            answer.append(idx + 1)
    return answer
    