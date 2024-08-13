import type { CookieOptions } from '#app/composables/cookie'


export const useIncrementEntityViews = async (entityId: number, entityType?: string, opts: CookieOptions<boolean> & { readonly?: false } = {}) => {
    const _entityType = entityType ?? getRouteEntity()
    const cookieKey = `${_entityType}-${entityId}-viewed`

    const today = new Date()

    const viewedCookie = useCookie<boolean>(cookieKey, {
        expires: new Date(today.setDate(today.getDate() + 3)),
        secure: true,
        partitioned: true,
        ...opts,
    })

    if (!viewedCookie.value) {
        await useAPI<{ result: boolean }>(`/api/${_entityType}/${entityId}/increment-views`, {
            method: 'POST',
        }).then(({ status }) => {
            if (status.value === 'success') {
                viewedCookie.value = true
            }
        })
    }
}
