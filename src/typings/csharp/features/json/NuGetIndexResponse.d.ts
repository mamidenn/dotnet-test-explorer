export default interface NuGetIndexResponse {
    resources: NuGetResource[];
}
interface NuGetResource {
    '@type': string;
    '@id': string;
}
export {};
