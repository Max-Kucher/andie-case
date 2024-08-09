import type { WhoIsAndyBannerResponse } from '~/@types/WhoIsAndyBanner'
import type { ContentPageResponse } from '~/@types/ContentPage'

export default interface AboutAndyGraphqlReq {
    data: {
        whoIsAndyBanners: {
            data: WhoIsAndyBannerResponse[]
        }
        whoIsAndy: {
            data: ContentPageResponse
        }
    }
}
