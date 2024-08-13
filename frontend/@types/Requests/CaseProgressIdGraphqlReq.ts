import type { CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { OfficerResponse } from '~/@types/Officer'

export default interface CriminalProceedingsGraphqlReq {
    data: {
        caseProgressItem: {
            data: CaseProgressItemResponse
        }
        officers: {
            data: OfficerResponse[]
        }
    }
}
