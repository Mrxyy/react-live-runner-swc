export type Scope = Record<string, any> & {
    /** scope used by import statement */
    import?: Record<string, any>;
    files?: Record<string, any>;
};

export type RunnerOptions = {
    /** the code to run */
    code: string;
    production?: boolean;
    /** globals that could be used in code */
    scope?: Scope;
    props?: Record<string, any>;
    files?: Record<string, string>;
};

export type TailwindConfig = any;
/**
 * The entry point to retrieve 'tailwindcss'
 *
 * @param options {@link TailwindcssOptions}
 * @example
 * const tailwindConfig: TailwindConfig = {
 *   theme: {
 *     extend: {
 *       colors: {
 *         marcherry: 'red',
 *       },
 *     },
 *   },
 * };
 * const tailwindCss = tailwindcssFactory({ tailwindConfig });
 */
export type createTailwindcss = (options?: TailwindcssOptions) => Tailwindcss;

export interface TailwindcssOptions {
    /**
     * The tailwind configuration to use.
     */
    tailwindConfig?: TailwindConfig;
}

export interface Tailwindcss {
    /**
     * Update the current Tailwind configuration.
     *
     * @param tailwindConfig The new Tailwind configuration.
     */
    setTailwindConfig: (tailwindConfig: TailwindConfig) => void;

    /**
     * Generate styles using Tailwindcss.
     *
     * This generates CSS using the Tailwind JIT compiler. It uses the Tailwind configuration that has
     * previously been passed to {@link createTailwindcss}.
     *
     * @param css The CSS to process. Only one CSS file can be processed at a time.
     * @param content All content that contains CSS classes to extract.
     * @returns The CSS generated by the Tailwind JIT compiler. It has been optimized for the given
     * content.
     * @example
     * tailwindcss.generateStylesFromContent(
     *   css,
     *   [myHtmlCode]
     * )
     */
    generateStylesFromContent: (css: string, content: (Content | string)[]) => Promise<string>;
}

/**
 * Contains the content of CSS classes to extract.
 * With optional "extension" key, which might be relevant
 * to properly extract css classed based on the content language.
 */
export interface Content {
    content: string;
    extension?: string;
}
