# HackerRank - Compare The Triplets
# URL: https://www.hackerrank.com/challenges/compare-the-triplets

def compareTriplets(a, b):
    aPoints = 0;
    bPoints = 0;
    for i in range (0,3):
        if a[i] > b[i]:
            aPoints += 1
        elif a[i] == b[i]:
            continue        
        else:
            bPoints += 1;
    return [aPoints,bPoints]
