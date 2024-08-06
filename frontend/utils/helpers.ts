import type { RuntimeConfig } from 'nuxt/schema'
import { parseDocument } from 'htmlparser2'
import { default as serializeDocument } from 'dom-serializer'

export function* arrayChunk<T>(arr: any[], n: number): Generator<T[], void> {
    for (let i = 0; i < arr.length; i += n) {
        yield arr.slice(i, i + n)
    }
}

export const buildBackendImageUrl = (runtimeConfig: RuntimeConfig, imagePath: string): string => {
    return `${runtimeConfig.public.backendUrl}${imagePath}`
}

export const createShortDescription = (val: string, length: number = 255): string => {
    const fragment = val.slice(0, length) + '...';

    return serializeDocument(parseDocument(fragment))
}
