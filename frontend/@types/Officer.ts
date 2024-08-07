import type BackendImage from '~/@types/BackendImage'
import type {
    BlankEntity,
    PublishableEntity,
    I18NEntity,
    IdentifiableEntity,
} from '~/@types/BlankEntity'

export interface Officer extends BlankEntity, PublishableEntity, I18NEntity, IdentifiableEntity {
    name: string
    description: string
    shortDescription: string
    image: BackendImage
    viewsCount: number
}

export interface OfficerResponse {
    id: number
    attributes: Officer & {
        image: {
            data: {
                attributes: BackendImage
            }
        }
    }
}
