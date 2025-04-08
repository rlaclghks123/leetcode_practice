/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
    - 풀지 못한 문제
    아래의 콘솔 결과와 설명의 그림과 다름
    // 설명
    1 list2
    1 list1
    2 list1
    3 list2
    4 list1
    4 list2


    // 콘솔 
    1 list1
    1 list2
    2 list2
    3 list2
    4 list1
    4 list2
 */
var mergeTwoLists = function (list1, list2) {
  list1?.val <= list2?.val ? console.log(list1?.val, 'list1') : console.log(list2?.val, 'list2');

  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};
