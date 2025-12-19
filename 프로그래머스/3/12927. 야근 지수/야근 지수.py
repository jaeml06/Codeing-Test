import heapq
def solution(n, works):
    if sum(works) <= n:
        return 0
    heap = [-w for w in works]
    heapq.heapify(heap)
    
    for i in range(n):
        w = -heapq.heappop(heap)
        w -= 1
        heapq.heappush(heap, -w)
    answer = sum([ w * w for w in heap])
    return answer