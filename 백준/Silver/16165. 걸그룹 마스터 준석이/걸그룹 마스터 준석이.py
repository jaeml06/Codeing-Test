import sys
read = sys.stdin.readline

N, M = map(int, read().split())

group = {}

for _ in range(N):
  g_name = read().strip()
  count = int(read())
  group[g_name] = [read().strip() for i in range(count)]

for _ in range(M):
  name = read().strip()
  type = int(read().strip())
  if type == 0:
    temp = group[name]
    print('\n'.join(sorted(temp)))
  elif type == 1:
    for key, value in group.items():
      if name in value:
        print(key)