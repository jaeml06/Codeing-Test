def solution(answers):
    answer = []
    supo = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    count = [0, 0, 0]
    for idx1, ans in enumerate(answers):
        for idx2, val in enumerate(supo) :
            if ans == val[idx1 % len(val)]:
                count[idx2] += 1
        
    max_count = max(count)
    for idx, val in enumerate(count):
        if max_count == val:
            answer.append(idx + 1)
    return answer