import type { NewsItem, NewsItemResponse } from '~/@types/NewsItem'
import type { CaseProgressItem, CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { CriminalProceedingItem, CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'
import type { Officer, OfficerResponse } from '~/@types/Officer'

export const transformNewsResponse = (newsItemResponse: NewsItemResponse[]): NewsItem[] => {
    return newsItemResponse.map(newsItem => ({
        ...newsItem.attributes,
        id: newsItem.id,
        image: {
            ...(newsItem.attributes.image.data?.attributes ?? {}),
        },
    }))
}

export const transformCriminalProceedingsResponse = (criminalProceedingItemResponse: CriminalProceedingItemResponse[]): CriminalProceedingItem[] => {
    return criminalProceedingItemResponse.map(item => ({
        ...item.attributes,
        id: item.id,
    }))
}

export const transformCaseProgressItemResponse = (caseProgressItemResponse: CaseProgressItemResponse[]): CaseProgressItem[] => {
    return caseProgressItemResponse.map(item => ({
        ...item.attributes,
        id: item.id,
        images: item.attributes?.images.data.map(imgItem => ({
            ...imgItem.attributes,
        })) ?? []
    }))
}

export const transformOfficerResponse = (officerResponse: OfficerResponse[]): Officer[] => {
    return officerResponse.map(item => ({
        ...item.attributes,
        id: item.id,
        image: {
            ...(item.attributes.image.data?.attributes ?? {}),
        },
    }))
}
