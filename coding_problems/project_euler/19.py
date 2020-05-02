# You are given the following information, but you may prefer to do some research for yourself.

#     1 Jan 1900 was a Monday.
#     Thirty days has September,
#     April, June and November.
#     All the rest have thirty-one,
#     Saving February alone,
#     Which has twenty-eight, rain or shine.
#     And on leap years, twenty-nine.
#     A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

# How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

# Solution:

def get_total_days(start, end):
    total_days = 0
    for i in range(start, end+1):
        if i%4 == 0:
            if i%100 == 0:
                if i%400 == 0:
                    total_days += 366
                else:
                    total_days += 365
            else:
                total_days += 366
        else:
            total_days += 365
    return total_days

def is_january(n):
    if n < 32:
        return True
    j = 0
    for i in range(1901, 2000):
        if 0 < n - j < 32:
            return True
        j += get_total_days(i, i)
    return False

days = get_total_days(1901, 2000)
sunday_cnt = 0
d = 0
dow = 1
for i in range(days):
    d += 1
    if is_january(d):
        if dow == 7:
            sunday_cnt += 1
    if dow < 7:
        dow += 1
    else:
        dow = 0
    
print(sunday_cnt)

# Answer: 171