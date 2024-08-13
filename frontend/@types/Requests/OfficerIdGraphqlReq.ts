import type { OfficerResponse } from '~/@types/Officer'
import type { CaseProgressItemResponse } from '~/@types/CaseProgressItem'

export default interface OfficerIdGraphqlReq {
    data: {
        officer: {
            data: OfficerResponse
        }
        caseProgressItems: {
            data: CaseProgressItemResponse[]
        }
    }
}
