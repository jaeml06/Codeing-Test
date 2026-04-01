n = int(input())
m = int(input())

if m > 0:
    broken = set(input().split())
else:
    broken = set()
    
answer = abs(n - 100)

for x in range(1000001):
    s = str(x)
    for c in s:
        if c in broken:
            break
    else:
        answer = min(answer, len(s) + abs(x - n))
print(answer)