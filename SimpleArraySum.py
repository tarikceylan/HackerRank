# HackerRank - Simple Array Sum
# URL: https://www.hackerrank.com/challenges/simple-array-sum/problem

def simpleArraySum(ar):
    sum = 0
    for i in range(0,len(ar)):
        sum += ar[i]
    return sum
