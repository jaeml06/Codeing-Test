import sys
sys.setrecursionlimit(100000)
K, N = map(int, input().split())


def combinations():

    def bfs(path):
        if len(path) == N:
            print(' '.join(map(str, path)))
            return

        for i in range(1, K + 1):
            if len(path) >= 2 and path[-1] == i and path[-2] == i:
                continue
            path.append(i)
            bfs(path)
            path.pop()
    
    bfs([])

combinations()