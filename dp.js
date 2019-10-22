// 动态规划
// https://www.zhihu.com/question/23995189

const n = 15;
const result = {
  0:0,
}
const route = {

}

const message = {

}

function dp(n) {
  for(let i = 1; i <= n; i++) {
    let cost = Number.POSITIVE_INFINITY;
    let arr = [];
    if( i - 1 >= 0) {
      const number = result[i-1] + 1;
      cost = Math.min(cost, number)
      if(cost === number) {
        const saveRoute = route[i-1]
        arr = [];
        if(saveRoute) {
          arr.push(...saveRoute.concat([1]))
        } else {
          arr.push(1)
        }
      }
    }
    if( i - 5 >= 0) {
      const number = result[i-5] + 1;
      cost = Math.min(cost, number)
      if(cost === number) {
        const saveRoute = route[i-5]
        arr = [];
        if(saveRoute) {
          arr.push(...saveRoute.concat([5]))
        } else {
          arr.push(5)
        }
      }
    }
    if( i - 11 >= 0) {
      const number = result[i-11] + 1;
      cost = Math.min(cost, number)
      if(cost === number) {
        const saveRoute = route[i-11]
        arr = [];
        if(saveRoute) {
          arr.push(...saveRoute.concat([11]))
        } else {
          arr.push(11)
        }
      }
    }
    result[i] = cost;
    message[i] = `cost: ${cost}, route: ${arr.join(' -> ')}`;
    route[i] = arr;
  }
}

dp(n);
console.log(message)