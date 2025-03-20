def sorta_sum(a, b):
    sum = a + b
    if 10 <= sum <= 19:
        return 20
    return sum

a = int(input())
b = int(input())
print(sorta_sum(a, b))