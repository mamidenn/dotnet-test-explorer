export declare class ParsedEnvironmentFile {
    Env: {
        [key: string]: any;
    };
    Warning: string | null;
    private constructor();
    static CreateFromFile(envFile: string, initialEnv: {
        [key: string]: any;
    } | undefined): ParsedEnvironmentFile;
    static CreateFromContent(content: string, envFile: string, initialEnv: {
        [key: string]: any;
    } | undefined): ParsedEnvironmentFile;
}
