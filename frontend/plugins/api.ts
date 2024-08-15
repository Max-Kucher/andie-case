
export default defineNuxtPlugin((nuxtApp) => {
    const baseURL = (nuxtApp.$config.backendUrl ?? nuxtApp.$config.public.backendUrl) as string
    const api = $fetch.create({
        baseURL,
    })

    return {
        provide: {
            api
        }
    }
})
