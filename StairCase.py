# HackerRank - Staircase
# URL: https://www.hackerrank.com/challenges/staircase/problem

def staircase(n):
    for i in range(1,n+1):
        spaces = (n-i) * " "
        if (i==n):
            print(i*"#")
        else:
            print (str(spaces) + (i*"#"))
