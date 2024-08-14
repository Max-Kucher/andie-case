import type { NewsItemResponse } from '~/@types/NewsItem'
import type { CaseProgressItemResponse } from '~/@types/CaseProgressItem'

export default interface MassMediaIdGraphqlReq {
    data: {
        newsItem: {
            data: NewsItemResponse
        }
        caseProgressItems: {
            data: CaseProgressItemResponse[]
        }
    }
}
