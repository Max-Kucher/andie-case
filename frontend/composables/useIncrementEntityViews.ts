import type { CookieOptions } from '#app/composables/cookie'


export const useIncrementEntityViews = async (entityId: number, opts: CookieOptions<boolean> & { readonly?: false } = {}) => {
    const entityType = getRouteEntity()
    const cookieKey = `${entityType}-${entityId}-viewed`

    const today = new Date()

    const viewedCookie = useCookie<boolean>(cookieKey, {
        expires: new Date(today.setDate(today.getDate() + 3)),
        secure: true,
        partitioned: true,
        ...opts,
    })

    if (!viewedCookie.value) {
        console.log(`Making request: ${entityType} ${entityId}`)
        await useAPI<{ result: boolean }>(`/api/${entityType}/${entityId}/increment-views`, {
            method: 'POST',
        }).then(({ status }) => {
            if (status.value === 'success') {
                viewedCookie.value = true
            }
        })
    }
}
