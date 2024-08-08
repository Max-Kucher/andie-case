import type BackendImage from '~/@types/BackendImage'
import type {
    BlankEntity,
    PublishableEntity,
    I18NEntity,
    IdentifiableEntity,
} from '~/@types/BlankEntity'

export interface WhoIsAndyBanner extends BlankEntity, PublishableEntity, I18NEntity, IdentifiableEntity {
    title: string
    titleTag: string
    transitionToTitle: boolean
    image: BackendImage
}

export interface WhoIsAndyBannerResponse {
    id: number
    attributes: WhoIsAndyBanner & {
        image: {
            data: {
                attributes: BackendImage
            }
        }
    }
}
