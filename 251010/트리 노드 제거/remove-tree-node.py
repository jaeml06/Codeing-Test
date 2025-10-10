from collections import deque

N = int(input().strip())
parents = list(map(int, input().split()))
delete_node = int(input().strip())

children = [[] for _ in range(N)]
root = -1
for i, p in enumerate(parents):
    if p == -1:
        root = i
    else:
        children[p].append(i)

if delete_node == root:
    print(0)
    exit()


deleted = [False] * N
queue = deque([delete_node])

while queue:
    node = queue.popleft()
    deleted[node] = True
    for child in children[node]:
        if not deleted[child]:
            queue.append(child)


leaf_count = 0
for i in range(N):
    if deleted[i]:
        continue
    has_alive_child = False
    for child in children[i]:
        if not deleted[child]:
            has_alive_child = True
            break
    if not has_alive_child:
        leaf_count += 1

print(leaf_count)