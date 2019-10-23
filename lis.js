// 最长上升子序列
// https://www.zhihu.com/question/23995189

// const arr = [1,2,1,5,3,1,4,6,1,9,7,8,1];
const arr = [1,2,1,5,4,6];

const result = {}
arr.forEach((v,index) => {
  result[index] = 1;
})
const message = {}
const route = {
  0: [arr[0]]
}

function lis(arr) {
  for(let i = 1; i< arr.length; i++) {
    let routeArr = []
    for(let j = 0; j < i; j++) {
      if(arr[j] < arr[i]) {
        routeArr = route[j].slice()
        result[i] = Math.max(result[j] + 1,result[i])
      } else {
        // j < i 时，result[i] 一定大于等于 result[j], 
        result[i] = Math.max(result[j],result[i])
        if(result[i] === result[j]){
          routeArr = route[j].slice();
        }
      }
    }
    // 关于当前 arr[i] 要不要push进去
    // 如果他是最大值，那么push进去
    // 否则，如果他push进去之后能成为最大值，那么也push进去
    if(arr[i] > routeArr[routeArr.length -1]) {
      routeArr.push(arr[i]);
    }  else if( 
      routeArr.length -1 >= 0 &&
       routeArr.length -2 >= 0 &&
      arr[i] <= routeArr[routeArr.length -1] &&
       arr[i] > routeArr[routeArr.length -2]) {
      routeArr.pop()
      routeArr.push(arr[i])
    }
    route[i] = routeArr;
    message[i] = `${i},length: ${result[i]}, route: ${routeArr.join(' -> ')}`;
  }
  
  // console.log(result)
  console.log(message)
}

lis(arr);