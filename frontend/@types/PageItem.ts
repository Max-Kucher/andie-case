import type BackendImage from '~/@types/BackendImage'

export default interface PageItem {
    title: string
    description: string
    name: string
    ogImage: Partial<BackendImage>
}
