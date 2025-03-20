def lone_sum(a, b, c):
    sum = 0
    if a != b and a != c:
        sum += a
    if b != a and b != c:
        sum += b
    if c != a and c != b:
        sum += c
    return sum

a = int(input())
b = int(input())
c = int(input())
print(lone_sum(a, b, c))