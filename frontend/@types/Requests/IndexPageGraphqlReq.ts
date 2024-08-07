import type { NewsItemResponse } from '~/@types/NewsItem'
import type { CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'
import type { OfficerResponse } from '~/@types/Officer'

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
        officers: {
            data: OfficerResponse[]
        }
    }
}
