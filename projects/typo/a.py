import os

file = open('all_passages.txt', 'r')
new_file = open('npassages.csv', 'w+')

passage_list = file.read().split('\n')

c = 0

for i in range(len(passage_list)):
    if (len(passage_list[i]) > 200):
        c += 1
        new_file.write(str(c) + '	' + passage_list[i] + '\n')
