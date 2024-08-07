import type { RuntimeConfig } from 'nuxt/schema'
import { parseDocument, DomHandler, DomUtils, Parser } from 'htmlparser2'
import { default as serializeDocument } from 'dom-serializer'

export function* arrayChunk<T>(arr: any[], n: number): Generator<T[], void> {
    for (let i = 0; i < arr.length; i += n) {
        yield arr.slice(i, i + n)
    }
}

export const buildBackendImageUrl = (runtimeConfig: RuntimeConfig, imagePath: string): string => {
    return `${runtimeConfig.public.backendUrl}${imagePath}`
}

export const stripTags = (html: string): string => {
    const handler = new DomHandler((error, dom) => {
        if (error) {
            throw new Error('Error while parsing HTML')
        }
    })

    const parser = new Parser(handler)
    parser.write(html)
    parser.end()

    return DomUtils.textContent(handler.dom)
}
