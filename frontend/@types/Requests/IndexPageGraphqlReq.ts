import type { NewsItemResponse } from '~/@types/NewsItem'
import type { CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'

export default interface IndexPageGraphqlReq {
    data: {
        newsItems: {
            data: NewsItemResponse[]
        }
        criminalProceedings: {
            data: CriminalProceedingItemResponse[]
        }
        caseProgressItems: {
            data: CaseProgressItemResponse[]
        }
    }
}
