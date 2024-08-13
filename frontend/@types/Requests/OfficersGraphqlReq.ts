import type { OfficerResponse } from '~/@types/Officer'
import type { Pagination } from '~/@types/Pagination'

export default interface OfficersGraphqlReq {
    data: {
        officers: {
            data: OfficerResponse[]
            meta: {
                pagination: Pagination
            }
        }
    }
}
