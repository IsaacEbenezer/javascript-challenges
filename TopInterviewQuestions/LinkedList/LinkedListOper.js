class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head= null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    getSize(){
        return this.size
    }

    //1.prepend ---O(1)
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    //2.Append   ---O(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next !== null){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    //insert
    insert(value,index){
        if(index <0 || index >this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    //remove

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if(index==0){
            removedNode = this.head
            this.head =this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    //Search

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }
    //print the list
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }
        let curr = this.head
        while(curr !== null){
            console.log(curr.value)
            curr = curr.next
        }
    }
}

const list = new LinkedList()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.append(4)
list.insert("isaac",2)
list.search(2)
list.print()
