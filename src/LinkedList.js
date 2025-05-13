import { Node } from "./Node.js";
export class LinkedList{
    #head;
    #tail;
    #size;
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }
    empty(){
        return this.#size===0;
    }
    append(value){
        const newNode = new Node(value);
        if(this.empty()){
            this.#head = newNode;
            this.#tail = newNode;
        }else{
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
        this.#size++;
    }
    prepend(value){
        const newNode = new Node(value);
        if(this.empty()){
            this.#head = newNode;
            this.#tail = newNode;
        }else{
            newNode.next = this.#head;
            this.#head = newNode;
        }
        this.#size++;
    }
    get size(){
        return this.#size;
    }
    get head(){
        return this.#head;
    }
    get tail(){
        return this.#tail;
    }
    at(index){
        if(index<0||index>this.#size-1)
            return null;
        let current = this.head;
        let i = 0;
        while(i!=index){
            current = current.next;
            i++;
        }
        return current;
    }
    pop(){
        const seccondToLast = this.at(this.#size-2);
        const poped = this.#tail;
        seccondToLast.next = null;
        this.#tail = seccondToLast;
        this.#size--;
        return poped;
    }
    contains(value){
        let current = this.#head;
        while(current!==null){
            if(current.value ===value)
                return true;
            current = current.next;
        }
        return false;
    }
    find(value){
        let current = this.#head;
        let index = 0;
        while(current!==null){
            if(current.value ===value)
                return index;
            current = current.next;
            index++;
        }
        return null;
    }
    toString(){
        let str = "";
        let current = this.#head;
        while(current!==null){
            str+=`(${current.value}) -> `;
            current = current.next;
        }
        str+="null";
        return str;
    }
    insertAt(value,index){
        if(index>this.#size){
            console.log("Error -> Can't insert at that index");
            return null;
        }
        const newNode = new Node(value);
        const previous = this.at(index-1);
        newNode.next = previous.next;
        previous.next = newNode;
        this.#size++;
        return newNode;
    }
    removeAt(index){
        if(index>this.#size-1){
            console.log("Error -> Can't find that index");
            return null;
        }
        const previous = this.at(index-1);
        const current = this.at(index);
        previous.next = current.next;
        this.#size--;
        current.next = null;
        return current;
    }
}