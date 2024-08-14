import type {
    BlankEntity,
    IdentifiableEntity,
} from '~/@types/BlankEntity'

export default interface BackendImage extends BlankEntity, IdentifiableEntity {
    url: string
    width: number
    height: number
    alternativeText: string
    mime: string
}
