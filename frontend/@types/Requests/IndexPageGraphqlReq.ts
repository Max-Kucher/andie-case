import type BackendImage from '~/@types/BackendImage'
import type NewsItem from '~/@types/NewsItem'
import type { CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'

export default interface IndexPageGraphqlReq {
    data: {
        newsItems: {
            data: {
                id: number
                attributes: NewsItem & {
                    image: {
                        data: {
                            attributes: BackendImage
                        }
                    }
                }
            }[]
        }
        criminalProceedings: {
            data: CriminalProceedingItemResponse[]
        }
        caseProgressItems: {
            data: CaseProgressItemResponse[]
        }
    }
}
