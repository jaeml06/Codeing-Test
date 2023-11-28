def solution(sequence, k):
    start = 0
    sum = 0
    min_length = float('inf')
    min_subarray = []

    for end in range(len(sequence)):
        sum += sequence[end]

        # 부분 배열의 합이 k가 될 때까지 start 포인터를 이동
        while sum > k:
            sum -= sequence[start]
            start += 1

        # 부분 배열의 합이 정확히 k일 때
        if sum == k:
            if end - start < min_length:
                min_length = end - start
                min_subarray = [start, end]

    return min_subarray
