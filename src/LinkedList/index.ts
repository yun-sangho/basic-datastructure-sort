class ListNode<T> {
  value: T
  next: ListNode<T>

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export default class LinkedList<T> {
  head: ListNode<T>

  constructor() {
    this.head = null
  }

  insertAtHead(value: T) {
    let node = new ListNode(value)
    node.next = this.head
    this.head = node

    return this
  }

  insertAtTail(value: T) {
    let node = new ListNode(value)

    if (this.head === null) {
      this.head = node
      return this
    }

    let current = this.head

    while(current.next !== null) {
      current = current.next
    }

    current.next = node
    return this
  }

  search(value: T) {
    let current = this.head

    while(current !== null) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }

    return false
  }

  delete(value: T) {
    let current = this.head

    if (current.value === value) {
      this.head = current.next
      return true
    }

    while(current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next
        return true
      }
      current = current.next
    }

    return false
  }
}