class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (l1, l2) => {
  let current = new ListNode(0);
  const dummy = current;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 ? l1 : l2;
  return dummy.next;
};

const mergeTwoLists2 = (l1, l2) => {
  if (l1 && l2) {
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists2(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists2(l1, l2.next);
      return l2;
    }
  }
  l1 = l1 ? l1 : l2;
  return l1;
};
