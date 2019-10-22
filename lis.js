// 最长上升子序列

// https://www.zhihu.com/question/23995189

const arr = [1,5,3,1,1,4,6,9,7,8];

const result = {}
arr.forEach((v,index) => {
  result[index] = 1;
})

function lis(arr) {
  for(let i = 1; i< arr.length; i++) {
    const route = []
    for(let j = 0; j < i; j++) {
      if(arr[i] > arr[j]) {
        route.push(arr[j])
        result[i] = Math.max(result[j] + 1,result[i])
      }
    }
    route.push(arr[i])
    console.log(i,route)
  }
  console.log(result)
}

lis(arr);