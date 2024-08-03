
export default defineNuxtPlugin((nuxtApp) => {
    const api = $fetch.create({
        baseURL: nuxtApp.$config.public.backendUrl as string,
    })

    return {
        provide: {
            api
        }
    }
})
