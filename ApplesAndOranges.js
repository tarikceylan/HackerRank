// HackerRank - Apples And Oranges
// URL: https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //house is located between s and t
    // a - apple tree loc, b- orange tree loc
    // apples - apples distance array from apple tree
    // oranges - oranges distance array from oranges tree

    // check if a+apples[i] between s-t 
    // check if s >= b+oranges >= t
    let countApples = 0;
    let countOranges = 0;

    for(let i=0; i < apples.length; i++) {
        if(s <= a+apples[i] && a+apples[i] <= t) {
            countApples++;
        }
    }
    console.log(countApples); 
    for(let i=0; i < oranges.length; i++) {
        if(s <= b+oranges[i] && b+oranges[i] <= t) {
            countOranges++;
        }   
    }
    console.log(countOranges);
}
