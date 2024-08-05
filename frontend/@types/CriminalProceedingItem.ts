import type BackendImage from '~/@types/BackendImage'
import type {
    BlankEntity,
    PublishableEntity,
    I18NEntity,
    IdentifiableEntity,
} from '~/@types/BlankEntity'

export default interface CriminalProceedingItem extends BlankEntity, PublishableEntity, I18NEntity, IdentifiableEntity {
    title: string
    description: string
    images: BackendImage[]
    viewsCount: number
}
