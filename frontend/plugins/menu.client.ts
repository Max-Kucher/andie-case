
export default defineNuxtPlugin(nuxtApp => {
    const isOpened = useState<boolean>('isMainMenuOpened')

    nuxtApp.hook('page:loading:start', () => {
        isOpened.value = false
    })
})
