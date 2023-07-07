import sys
from collections import deque

input = sys.stdin.readline

F, S, G, U, D = map(int, input().split())
visited = [0] * (F + 1)


def bfs(S):
    queue = deque([S])
    visited[S] = 1
    while queue:
        destination = queue.popleft()
        if destination == G:
            return visited[destination] - 1
        else:
            if 0 < destination + U <= F and visited[destination + U] == 0:
                queue.append(destination + U)
                visited[destination + U] = visited[destination] + 1

            if 0 < destination - D <= F and visited[destination - D] == 0:
                queue.append(destination - D)
                visited[destination - D] = visited[destination] + 1
    return "use the stairs"


print(bfs(S))
