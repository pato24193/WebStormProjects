interface ISingleRepo {
    name: string;
}
interface IRepos {
    items: Array<ISingleRepo>;
}

async function fetchRepo(): Promise<Array<ISingleRepo>> {
    let res: Response | IRepos = await fetch('https://api.github.com/search/repositories?q=angular');
    res = await res.json() as IRepos;
    return res.items;
}

function createItem(text: string): HTMLLIElement {
    const item = document.createElement('li') as HTMLLIElement;
    item.textContent = text;
    return item;
}

const container = document.querySelector('.app .list');

async function main() {
    const res = await fetchRepo();

    res.forEach((item: any) => {
        const li = createItem(item.name);
        container.appendChild(li);
    });
}

main();