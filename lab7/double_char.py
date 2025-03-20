#Given a string, return a string where for every char in the original, there are two chars.
def double_char(str):
    return ''.join(c * 2 for c in str)

str = input()
print(double_char(str))