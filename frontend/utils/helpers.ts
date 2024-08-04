import type {RuntimeConfig} from 'nuxt/schema'

export function* arrayChunk<T>(arr: any[], n: number): Generator<T[], void> {
    for (let i = 0; i < arr.length; i += n) {
        yield arr.slice(i, i + n)
    }
}

export const buildBackendImageUrl = (runtimeConfig: RuntimeConfig, imagePath: string): string => {
    return `${runtimeConfig.public.backendUrl}${imagePath}`
}
