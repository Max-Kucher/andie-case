import type { NewsItem, NewsItemResponse } from '~/@types/NewsItem'
import type { CaseProgressItem, CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { CriminalProceedingItem, CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'

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
