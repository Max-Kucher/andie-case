import type { CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { Pagination } from '~/@types/Pagination'

export default interface CriminalProceedingsGraphqlReq {
    data: {
        caseProgressItems: {
            data: CaseProgressItemResponse[]
            meta: {
                pagination: Pagination
            }
        }
    }
}
