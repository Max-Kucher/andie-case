import type {
    BlankEntity,
    IdentifiableEntity,
    I18NEntity,
} from '~/@types/BlankEntity'

export interface ContentPage extends BlankEntity, I18NEntity, IdentifiableEntity {
    description: string
}

export interface ContentPageResponse {
    id: number
    attributes: ContentPage
}
