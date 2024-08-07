import type BackendImage from '~/@types/BackendImage'
import type {
    BlankEntity,
    PublishableEntity,
    I18NEntity,
    IdentifiableEntity,
} from '~/@types/BlankEntity'

export interface CriminalProceedingItem extends BlankEntity, PublishableEntity, I18NEntity, IdentifiableEntity {
    title: string
    description: string
    shortDescription: string
    images: BackendImage[]
    viewsCount: number
}

export interface CriminalProceedingItemResponse {
    id: number
    attributes: CriminalProceedingItem
}

