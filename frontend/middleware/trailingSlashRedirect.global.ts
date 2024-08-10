
export default defineNuxtRouteMiddleware(to => {
    if (to.fullPath !== '/' && to.fullPath.endsWith('/')) {
        return navigateTo(to.fullPath.slice(0, -1), {
            redirectCode: 301
        })
    }
})
