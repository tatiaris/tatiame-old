# Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

# Solution:

lines = []
while True:
    line = input()
    if line:
        lines.append(line)
    else:
        break

nums = '\n'.join(lines).split('\n')
total = 0
for num in nums:
  total += int(num)

print(str(total)[0:10])

# Answer: 5537376230