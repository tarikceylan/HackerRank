# HackerRank - Diagonal Difference
# URL: https://www.hackerrank.com/challenges/diagonal-difference

def diagonalDifference(arr):
    leftDiag = 0
    rightDiag = 0
    for i in range(0,n):
        leftDiag += arr[i][i]
    for j in range (0,n):
       rightDiag += arr[j][i]
       i = i-1
    return abs (leftDiag-rightDiag)
