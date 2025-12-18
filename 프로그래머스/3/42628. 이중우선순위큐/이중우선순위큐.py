import heapq
def solution(operations):
    min_h = []
    max_h = []
    valid = [False] * (len(operations) + 1)
    idx = 0
    
    
    def clean_min():
        while min_h and not valid[min_h[0][1]]:
            heapq.heappop(min_h)

    def clean_max():
        while max_h and not valid[max_h[0][1]]:
            heapq.heappop(max_h)
    
    for op in operations:
        cmd, x = op.split(' ')
        x = int(x)
        
        if cmd == 'I':
            heapq.heappush(min_h, (x, idx))
            heapq.heappush(max_h, (-x, idx))
            valid[idx] = True
            idx += 1
        elif cmd == "D":
            if x == 1:
                clean_max()
                if max_h:
                    _, i = heapq.heappop(max_h)
                    valid[i] = False
            else:
                clean_min()
                if min_h:
                    _, i = heapq.heappop(min_h)
                    valid[i] = False
    clean_min()
    clean_max()
    if not min_h or not max_h:
        return [0, 0]

    return [-max_h[0][0], min_h[0][0]]