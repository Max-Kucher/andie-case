import type { BackendPagination, Pagination } from '~/@types/Pagination'

export const usePagination = (initialPageSize: number = 6) => {
    const route = useRoute()

    const pagination = reactive<Pagination>({
        page: Number(route.query?.page ?? 1),
        pageSize: initialPageSize,
        pageCount: 1,
        total: 0,
    })

    const backendPagination = ref<BackendPagination>({
        page: pagination.page,
        pageSize: pagination.pageSize,
    })

    watch(
        pagination,
        (newVal) => {
            // If remove this condition -> will trigger duplicated API calls to backend
            if (newVal.page === backendPagination.value.page
                && newVal.pageSize === backendPagination.value.pageSize
            ) {
               return
            }

            backendPagination.value = {
                page: newVal.page,
                pageSize: newVal.pageSize,
            }
        },
        { deep: true }
    )

    return {
        pagination,
        backendPagination,
    }
}
