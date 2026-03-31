s = input()


croatia = ['dz=', 'c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z=']

for x in croatia:
    s = s.replace(x, '*')

print(len(s))