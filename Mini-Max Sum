# HackerRank - Mini-Max Sum
# URL: https://www.hackerrank.com/challenges/mini-max-sum

def miniMaxSum(arr):
    minSum = 0
    maxSum = 0
    arr.sort()
    for i in range(0,len(arr)):
        minSum += arr[i]
        maxSum += arr[i]
    minSum = minSum - arr[len(arr)-1]
    maxSum = maxSum - arr[0]
