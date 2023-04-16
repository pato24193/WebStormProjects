import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data: T): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLast(data: T): void {
        if (!this.head){
            this.insertFirst(data);
        }else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    search(data: T) {
        if (this.size){
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data == data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    deleteFirstNode() {
        if (this.head) {
            if (this.head.next){
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            this.size--;
        }
    }

    deleteLastNode() {
        if (this.head) {
            let currentNode = this.head;
            if (!currentNode.next) {
                this.head = null;
            } else {
                let previousNode = null;
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
                this.tail = previousNode;
                this.size--;
            }
        }
    }

    getSize() : number{
        return this.size;
    }

    readList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }

    addOfIndex(index: number, data: T): void {
        if (index == 0) {
            this.insertFirst(data);
        } else {
            let node = new Node(data);
            let preNode = this.head;
            let currNode = this.head

            for (let i = 1; i < index; i++) {
                preNode =  currNode;
                currNode = preNode.next;
            }

            let temLink = currNode.next;
            currNode.next = node;
            node.next = temLink;
            this.size++;
        }
    }
}
