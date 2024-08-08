import type { SwiperOptions } from 'swiper/types'

export const getDefaultScrollerParams = (id: string): SwiperOptions => {
    return {
        loop: true,
        modules: [SwiperPagination, SwiperNavigation],
        pagination: {
            enabled: true,
            clickable: true,
            el: `#${id}-pagination`,
        },
        navigation: {
            enabled: true,
            prevEl: `#${id}-nav-prev`,
            nextEl: `#${id}-nav-next`,
        },
    }
}
