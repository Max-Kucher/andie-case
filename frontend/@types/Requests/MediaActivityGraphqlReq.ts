import type { MediaActivityItemResponse } from '~/@types/MediaActivityItem'
import type { Pagination } from '~/@types/Pagination'

export default interface MediaActivityGraphqlReq {
    data: {
        mediaActivityItems: {
            data: MediaActivityItemResponse[]
            meta: {
                pagination: Pagination
            }
        }
    }
}
