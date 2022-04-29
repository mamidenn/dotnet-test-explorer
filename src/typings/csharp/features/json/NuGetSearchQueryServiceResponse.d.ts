export default interface NuGetSearchQueryServiceResponse {
    data: NuGetSearchQueryServiceDataElement[];
}
interface NuGetSearchQueryServiceDataElement {
    id: string;
    description: string;
    version: string;
}
export {};
