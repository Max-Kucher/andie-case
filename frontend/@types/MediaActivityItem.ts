import type BackendImage from '~/@types/BackendImage'
import type {
    BlankEntity,
    PublishableEntity,
    IdentifiableEntity,
} from '~/@types/BlankEntity'

export interface MediaActivityItem extends BlankEntity, PublishableEntity, IdentifiableEntity {
    media: BackendImage
    matchedUrl: string
}

export interface MediaActivityItemResponse {
    id: number
    attributes: MediaActivityItem & {
        media: {
            data: {
                attributes: BackendImage
            }
        }
    }
}
