import type BackendImage from '~/@types/BackendImage'
import type {
    BlankEntity,
    PublishableEntity,
    I18NEntity,
    IdentifiableEntity,
} from '~/@types/BlankEntity'

export interface NewsItem extends BlankEntity, PublishableEntity, I18NEntity, IdentifiableEntity {
    title: string
    description: string
    image: BackendImage
    viewsCount: number
}

export interface NewsItemResponse {
    id: number
    attributes: NewsItem & {
        image: {
            data: {
                attributes: BackendImage
            }
        }
    }
}
