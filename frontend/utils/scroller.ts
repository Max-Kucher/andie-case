import type { SwiperOptions } from 'swiper/types'

export const getDefaultScrollerParams = (id: string): SwiperOptions => {
    return {
        slidesPerView: 1.3,
        spaceBetween: 12,
        breakpoints: {
            700: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 22,
            },
        },
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
