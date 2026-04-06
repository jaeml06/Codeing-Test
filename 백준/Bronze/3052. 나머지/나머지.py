set1 = set()

for _ in range(10):
    v = int(input())
    set1.add(v % 42)

print(len(set1))