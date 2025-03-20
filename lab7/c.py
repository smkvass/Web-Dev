a = int(input())
b = int(input())
for i in range(a, b + 1):
    if i ** 2 < b + 1:
        print(i ** 2)
    else:
        break