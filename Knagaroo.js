// HackerRank - Kangaroo
// URL: https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
    let notMet = true;
    if(v2 > v1) {
        return "NO";
    }
    else {
        while (notMet) {
            x1 += v1;
            x2 += v2;
            if(x1 == x2) {
                notMet = false;
                return "YES";
            }
            else {
                notMet = true;
            }
        }
    }
}
