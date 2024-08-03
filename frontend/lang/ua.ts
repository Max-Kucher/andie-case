
export default defineI18nLocale(async locale => {
    return {
        layouts: {
            title: 'Справа Andy',
            metaDescription: 'Сайт \'Справа Andy\' присвячений розслідуванню справи Andy. Дізнайтеся про ключові факти, перебіг розслідування та останні новини щодо цієї резонансної справи в Україні.',
        },
        homepage: {
            seo: {
                title: 'Головна',
            },
        },
        logo: {
            title: 'Логотип',
        },
        common: {
            joinCommunity: {
                button: {
                    text: 'Приєднатись до спільноти',
                },
            },
        },
        socials: {
            telegram: 'Телеграм',
            instagram: 'Інстаграм',
            youtube: 'YouTube',
            x: 'X',
        },
    }
})
