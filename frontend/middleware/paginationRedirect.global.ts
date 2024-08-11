
export default defineNuxtRouteMiddleware(to => {
    if (to.query.page === '1') {
        const { page, ...otherQueryParams } = to.query;

        return navigateTo({ ...to, query: otherQueryParams }, { redirectCode: 301 });
    }
})
