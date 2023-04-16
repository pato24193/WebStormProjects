import {Stack} from "../Stack";
import {Queue} from "../Queue";

export class Palindrome {

    static isValid(str: string): boolean {
        let stack = new Stack<string>();
        let queue = new Queue<string>();

        for (let character of str) {
            stack.push(character);
            queue.enqueue(character);
        }

        while (!stack.isEmpty()) {
            if (stack.pop() !== queue.dequeue()) {
                return false;
            }
        }

        return true;
    }
}
