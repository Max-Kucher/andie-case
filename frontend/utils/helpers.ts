import type { RuntimeConfig } from 'nuxt/schema'
import { DomHandler, DomUtils, Parser } from 'htmlparser2'
import type BackendImage from '~/@types/BackendImage'

export function* arrayChunk<T>(arr: any[], n: number): Generator<T[], void> {
    for (let i = 0; i < arr.length; i += n) {
        yield arr.slice(i, i + n)
    }
}

export const buildBackendImageUrl = (runtimeConfig: RuntimeConfig, image: string | BackendImage): string => {
    let url = image

    if (typeof url !== 'string') {
        url = url.url
    }

    console.log(runtimeConfig)

    return `${runtimeConfig.public.backendUrl}${url}`
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

export const trimString = (str: string, length: number = 200): string => {
    return str.slice(0, length) + (str.length > length ? '...' : '')
}

export const getRouteEntity = () => {
    return useRoute().matched[0].name?.toString().split('-id')[0] ?? ''
}
