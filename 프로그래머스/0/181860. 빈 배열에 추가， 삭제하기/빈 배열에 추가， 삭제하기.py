def solution(arr, flag):
    answer = []
    for idx, f in enumerate(flag):
        print(f)
        if f:
            for i in range(arr[idx] * 2): 
                answer.append(arr[idx])
        else:
             for i in range(arr[idx]): 
                    answer.pop()
    return answer