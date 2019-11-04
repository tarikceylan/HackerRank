# HackerRank - Plus Minus
# URL: https://www.hackerrank.com/challenges/plus-minus/problem

def plusMinus(arr):
    positiveNums = 0
    negativeNums = 0
    zeros = 0
    for i in range (0,len(arr)):
        if (arr[i] > 0):
            positiveNums += 1
        elif (arr[i] < 0):
            negativeNums += 1
        else:
            zeros += 1
    pNRatio = positiveNums / len(arr)
    nNRatio = negativeNums / len(arr)
    zRatio = zeros / len(arr)
    print(pNRatio)
    print(nNRatio)
    print(zRatio) 
