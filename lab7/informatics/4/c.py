n = int(input())
i = 0
res = 1
while res <= n:
    print(res, end=' ')
    i = i + 1
    res = 2 ** i
