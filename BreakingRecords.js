# HackerRank - Breaking Records
# URL: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
    // get the number of games
    // get the ith index value and check if it's higher or lower than the next one.
        //if it's higher. best++
        // if it's lower. worst++
        // return best, worst
    let numOfGames = scores.length;
    let bestRecords = 0;
    let bestScore  = scores[0];
    let worstRecords = 0;
    let worstScore  = scores[0];
    for (let i = 0; i <= numOfGames; i++ ) {
        let currScore = scores[i];
        if(currScore > bestScore) {
            bestScore = currScore
            bestRecords++;
        } else if (currScore < worstScore) {
            worstScore = currScore;
            worstRecords++;
        }
    }
    return [bestRecords, worstRecords];
}
