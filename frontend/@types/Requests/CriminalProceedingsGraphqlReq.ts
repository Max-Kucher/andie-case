import type { CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'
import type { Pagination } from '~/@types/Pagination'

export default interface CriminalProceedingsGraphqlReq {
    data: {
        criminalProceedings: {
            data: CriminalProceedingItemResponse[]
            meta: {
                pagination: Pagination
            }
        }
    }
}
