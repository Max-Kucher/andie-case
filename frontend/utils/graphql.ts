import type { NewsItem, NewsItemResponse } from '~/@types/NewsItem'
import type { CaseProgressItem, CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { CriminalProceedingItem, CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'
import type { Officer, OfficerResponse } from '~/@types/Officer'
import type { WhoIsAndyBanner, WhoIsAndyBannerResponse } from '~/@types/WhoIsAndyBanner'
import type { ContentPage, ContentPageResponse } from '~/@types/ContentPage'

export const transformNewsResponse = (newsItemResponse: NewsItemResponse): NewsItem => {
    return {
        ...newsItemResponse.attributes,
        id: newsItemResponse.id ?? null,
        image: {
            ...(newsItemResponse.attributes.image.data?.attributes ?? null),
        },
    }
}

export const transformNewsResponseItems = (newsItemResponse: NewsItemResponse[]): NewsItem[] => {
    return newsItemResponse.map(item => transformNewsResponse(item))
}

export const transformCriminalProceedingsResponse = (criminalProceedingItemResponse: CriminalProceedingItemResponse): CriminalProceedingItem => {
    return {
        ...criminalProceedingItemResponse.attributes,
        id: criminalProceedingItemResponse.id ?? null,
    }
}

export const transformCriminalProceedingsResponseItems = (criminalProceedingItemResponse: CriminalProceedingItemResponse[]): CriminalProceedingItem[] => {
    return criminalProceedingItemResponse.map(item => transformCriminalProceedingsResponse(item))
}

export const transformCaseProgressItemResponse = (caseProgressItemResponse: CaseProgressItemResponse): CaseProgressItem => {
    return {
        ...caseProgressItemResponse.attributes,
        id: caseProgressItemResponse.id ?? null,
        images: caseProgressItemResponse.attributes?.images.data.map(imgItem => ({
            ...imgItem.attributes,
        })) ?? []
    }
}

export const transformCaseProgressItemResponseItems = (caseProgressItemResponse: CaseProgressItemResponse[]): CaseProgressItem[] => {
    return caseProgressItemResponse.map(item => transformCaseProgressItemResponse(item))
}

export const transformOfficerResponse = (officerResponse: OfficerResponse): Officer => {
    return {
        ...officerResponse.attributes,
        id: officerResponse.id ?? null,
        image: {
            ...(officerResponse.attributes.image.data?.attributes ?? null),
        },
    }
}

export const transformOfficerResponseItems = (officerResponse: OfficerResponse[]): Officer[] => {
    return officerResponse.map(item => transformOfficerResponse(item))
}

export const transformWhoIsAndyBannersResponse = (whoIsAndyBannerResponse: WhoIsAndyBannerResponse): WhoIsAndyBanner => {
    return {
        ...whoIsAndyBannerResponse.attributes,
        id: whoIsAndyBannerResponse.id ?? null,
        image: {
            ...(whoIsAndyBannerResponse.attributes.image.data?.attributes ?? null),
        },
    }
}

export const transformWhoIsAndyBannersResponseItems = (whoIsAndyBannerResponse: WhoIsAndyBannerResponse[]): WhoIsAndyBanner[] => {
    return whoIsAndyBannerResponse.map(item => transformWhoIsAndyBannersResponse(item))
}

export const transformContentPageResponse = (contentPageResponse: ContentPageResponse): ContentPage => {
    return {
        ...contentPageResponse.attributes,
        id: contentPageResponse.id ?? null,
    }
}
