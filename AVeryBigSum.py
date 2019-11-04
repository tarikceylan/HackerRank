# HackerRank - A Very Big Sum
# URL: https://www.hackerrank.com/challenges/a-very-big-sum/problem

def aVeryBigSum(ar):
    result = 0
    for i in range(0,len(ar)):
        result += ar[i]
    return result
