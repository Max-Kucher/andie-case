import type BackendImage from '~/@types/BackendImage'
import type NewsItem from '~/@types/NewsItem'
import type CaseProgressItem from '~/@types/CaseProgressItem'
import type CriminalProceedingItem from '~/@types/CriminalProceedingItem'

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
            data: {
                id: number
                attributes: CriminalProceedingItem
            }[]
        }
        caseProgressItems: {
            data: {
                id: number
                attributes: CaseProgressItem & {
                    image: {
                        data: {
                            attributes: BackendImage
                        }[]
                    }
                }
            }[]
        }
    }
}
