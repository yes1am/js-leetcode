// 链接： https://leetcode-cn.com/problems/add-two-numbers/

// 示例
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(2);
const l1node2 = new ListNode(4);
const l1node3 = new ListNode(3);

l1node2.next = l1node3
l1.next = l1node2

const l2 = new ListNode(5);
const l2node2 = new ListNode(6);
const l2node3 = new ListNode(4);

l2node2.next = l2node3
l2.next = l2node2

var addTwoNumbers = function(l1, l2) {
  let head = null;  // 链表头节点
  let tail = null;  // 对于链表，新增节点是在尾部 tail 将 next 指向新的节点
  let flag = 0;     // 是否有进位

  while(l1 || l2) {  // 只要存在一个，就继续循环
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag;
    if(sum > 9){
      flag = 1
      sum = sum - 10;
    } else {
      flag = 0;
    }

    const node = new ListNode(sum)

    if(!head) {
      // 第一个节点
      head = tail = node;
    } else {
      // 当第二个节点开始时，让当前的tail指向新节点，等于在链表末尾新增
      // 同时让tail等于新节点，便于下次循环再次添加节点
      tail.next = node;
      tail = node;
    }

    l1 = (l1 && l1.next)
    l2 = (l2 && l2.next)
    console.log(l1,l2)

  }

  // 循环完之后，如果还有进位，则继续添加一个新节点
  if(flag === 1) {
    tail.next = new ListNode(1)
  }

  return head;
}

const result = addTwoNumbers(l1,l2);

console.log(result);