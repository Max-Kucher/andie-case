import type { NewsItemResponse } from '~/@types/NewsItem'
import type { Pagination } from '~/@types/Pagination'

export default interface MassMediaGraphqlReq {
    data: {
        newsItems: {
            data: NewsItemResponse[]
            meta: {
                pagination: Pagination
            }
        }
    }
}
