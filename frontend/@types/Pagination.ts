
export interface BackendPagination {
    page: number
    pageSize: number
}

export interface Pagination extends BackendPagination{
    pageCount: number
    total: number
}
