n = int(input())
marks = {}

for _ in range(n):
    info = input().split()
    name = info[0]
    marks = list(map(float, info[1:]))
    marks[name] = marks

query_name = input()

average = sum(marks[query_name]) / len(marks[query_name])
print(f"{average:.2f}")