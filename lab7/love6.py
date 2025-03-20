def love6(a, b):
    if a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6:
        return True
    return False

a = int(input())
b = int(input())
print(love6(a, b))