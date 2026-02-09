def product(arr, repeat):
    result = []
    path = []
    def dfs(depth):
        if depth == repeat:
            result.append(tuple(path))
            return
        for x in arr:
            path.append(x)
            dfs(depth + 1)
            path.pop()
    dfs(0)
    return result

def solution(word):
    answer = 0
    a = ['A', 'E', 'I', 'O', 'U']
    temp = []
    for i in range(1, 6):
        for p in product(a, i):
            temp.append(''.join(p))
    temp.sort()
    answer = temp.index(word) + 1
    return answer