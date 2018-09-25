/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

function loopATriangle() {
  for (let i = 1; i <= 7; i++) {
    let counter = i;
    let result = '';
    while (counter-- > 0) {
      result += '#';
    }
    console.log(result);
  }
}

loopATriangle();
