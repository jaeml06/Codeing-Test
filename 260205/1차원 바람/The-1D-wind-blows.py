n, m, q = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
winds = [(int(r), d) for r, d in [input().split() for _ in range(q)]]

def opposite(d):
    return 'L' if d == 'R' else 'R'

def share_any(row1, row2):
    for j in range(m):
        if row1[j] == row2[j]:
            return True
    return False

def shift_row(row, d):
    if d == 'L':
        return row[-1:] + row[:-1]
    else:
        return row[1:] + row[:1]

for r, d in winds:
    r -= 1

    a[r] = shift_row(a[r], d)
    
    cur_d = opposite(d)
    for i in range(r-1, -1, -1):
        if share_any(a[i], a[i + 1]):
            a[i] = shift_row(a[i], cur_d)
            cur_d = opposite(cur_d)
        else:
            break

    cur_d = opposite(d)
    for i in range(r + 1, n):
        if share_any(a[i], a[i - 1]):
            a[i] = shift_row(a[i], cur_d)
            cur_d = opposite(cur_d)
        else:
            break

for row in a:
    for v in row:
        print(v, end=' ')
    print()