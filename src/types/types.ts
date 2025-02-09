export interface NavigationItem {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export interface Avatar {
    file: File | null;
    url: string;
}
// export interface Lists {
//     id: string;
//     item_count: number;
//     lists: List[];
// }

export type Lists = List[];
interface List {
    id: string;
    name: string;
    img: string | null;
    suggestions: string | null;
    items: Item[]
}

interface Item {
    id: string;
    label: string;
    checked: boolean;
}
