

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def mergeTwoLists(l1, l2):
    current = ListNode(0)
    dummy = current

    while l1 and l1:
        if (l1 < l2):
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    current.next = l1 if l1 else l2
    return dummy.next


def mergeTwoLists2(l1, l2):

    if (l1 and l2):
        if (l1.val < l2.val):
            l1.next = mergeTwoLists2(l1.next, l2)
            return l1
        else:
            l2.next = mergeTwoLists2(l1, l2.next)
            return l2

    if l1 == None:
        return l2
    else:
        return l1
