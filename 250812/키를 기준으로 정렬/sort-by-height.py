n = int(input())
students = []
for _ in range(n):
    n_i, h_i, w_i = input().split()
    students.append((n_i, int(h_i), int(w_i)))

# Please write your code here.
students.sort(key= lambda x: x[1])

for n_i, h_i, w_i in students:
    print(f'{n_i} {h_i} {w_i}')