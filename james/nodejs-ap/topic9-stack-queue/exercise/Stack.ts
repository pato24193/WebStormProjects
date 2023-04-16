export class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(data: T) {
        this.container.push(data)
    }

    pop(): T {
        return this.container.pop();
    }

    size(): number {
        return this.container.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

}

// 1. Create project NodeJS
// 2. npm install typescript
// 3. npm install ts-node
// 4. Setting node package in Edit Config -> folder ts-node
// 5. Add "dom" in tsconfig.json to use "console.log".
// 6. Install plugin "Run config for TypeScript"
