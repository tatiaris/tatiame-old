num2words = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', \
             6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', \
            11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', \
            15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', \
            19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', \
            50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', \
            90: 'ninety', 0: '', 100: 'onehundred', 200: 'twohundred',\
            300: 'threehundred', 400: 'fourhundred', 500: 'fivehundred', 600: 'sixhundred',\
            700: 'sevenhundred', 800: 'eighthundred', 900: 'ninehundred',\
            1000: 'onethousand'}

def n2w(n):
  try:
    return len(num2words[n])
  except KeyError:
    l = len(str(n))
    if l == 2:
      return len(num2words[n-n%10] + num2words[n%10].lower())
    elif l == 3:
      return len(num2words[n-n%100]) + len('and') + n2w(n%100)


n = 1001
t = 0
for i in range(1, n):
  t += n2w(i)
print(t)

# Answer: 21124