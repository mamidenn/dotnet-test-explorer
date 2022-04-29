export interface IPackage {
    id?: string;
    description: string;
    url: string;
    fallbackUrl?: string;
    platforms: string[];
    architectures: string[];
    platformId?: string;
    integrity?: string;
    isFramework?: boolean;
}
