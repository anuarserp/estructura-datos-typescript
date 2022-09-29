class Nod<T> {
    public next: Nod<T>;
    public data: T;
    constructor(data: T) {
        this.data = data
    }
}

interface ILinkedList<T> {
    insert(data: T): void
}

class LinkedList<T> implements ILinkedList<T> {
    private head: Nod<T>

    insert(data: T): void {
        const aux = new Nod(data)
        if(!this.head) {
            this.head = aux
            return
        }
        let current: Nod<T> | null = this.head
        while(current.next != null) {
            current = current.next
        }
        current.next = aux
    }

}

const a = new LinkedList<Number>

a.insert(2)
a.insert(3)
a.insert(4)

console.log(a);
