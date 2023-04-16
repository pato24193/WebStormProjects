export class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }

    readData(): T {
        return this.data;
    }
}

// 1. Create project NodeJS
// 2. npm install typescript
// 3. npm install ts-node
// 4. Setting node package in Edit Config -> folder ts-node
// 5. Add "dom" in tsconfig.json to use "console.log".
// 6. Install plugin "Run config for TypeScript"
