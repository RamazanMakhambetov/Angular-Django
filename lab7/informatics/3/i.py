x = int(input())
res = 0
i = 0
while i <= x:
    i += 1
    if x % i == 0:
        res += 1
print(res)