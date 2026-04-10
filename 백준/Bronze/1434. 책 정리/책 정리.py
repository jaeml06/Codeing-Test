n, m = map(int, input().split())
boxes = list(map(int, input().split()))
books = list(map(int, input().split()))

box_idx = 0
book_idx = 0
remain = boxes[:]

while book_idx < m:
    if remain[box_idx] >= books[book_idx]:
        remain[box_idx] -= books[book_idx]
        book_idx += 1
    else:
        box_idx += 1
print(sum(remain))