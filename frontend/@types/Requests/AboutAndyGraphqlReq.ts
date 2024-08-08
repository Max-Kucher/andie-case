import type { WhoIsAndyBannerResponse } from '~/@types/WhoIsAndyBanner'

export default interface AboutAndyGraphqlReq {
    data: {
        whoIsAndyBanners: {
            data: WhoIsAndyBannerResponse[]
        }
    }
}
