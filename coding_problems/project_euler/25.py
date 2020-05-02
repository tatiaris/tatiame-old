seq = [1, 1]
while len(str(seq[-1])) < 1000:
    seq.append(seq[-1] + seq[-2])

print(seq[-1])
print(len(seq))
