import type { CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'
import type { OfficerResponse } from '~/@types/Officer'

export default interface CriminalProceedingsGraphqlReq {
    data: {
        criminalProceeding: {
            data: CriminalProceedingItemResponse
        }
        officers: {
            data: OfficerResponse[]
        }
    }
}
