// HackerRank - Time Conversion
// URL: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let timeArr = s.split(':');
  let hh = parseInt(timeArr[0]);
  let mm = timeArr[1];
  let ss = timeArr[2];

  if(ss.includes('PM')) {
    ss = ss.slice(0,2);
    if(hh < 12 ) {
      hh += 12;
      if (hh == 24) {
        hh = '00';
      }
    }
  }

  else if(ss.includes('AM')) {
    if (hh == 12 || hh > 9){
      hh = '00';
      ss = ss.slice(0,2);
    }
    else if(hh < 10) {
      ss = ss.slice(0,2);
      hh = '0'+hh;
    }
   }

   let time = hh + ":" + mm + ":" + ss;
   return time;
}
