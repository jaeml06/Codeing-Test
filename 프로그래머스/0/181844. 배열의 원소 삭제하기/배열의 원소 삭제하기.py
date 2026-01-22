def solution(arr, delete_list):
    delete_set = set(delete_list)
    answer = []
    for a in arr:
        if a not in delete_set:
            answer.append(a)
    return answer