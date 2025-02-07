export interface NavigationItem {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export interface Avatar {
    file: File | null;
    url: string;
}
