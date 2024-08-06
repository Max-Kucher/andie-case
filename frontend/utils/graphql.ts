import type { CaseProgressItem, CaseProgressItemResponse } from '~/@types/CaseProgressItem'
import type { CriminalProceedingItem, CriminalProceedingItemResponse } from '~/@types/CriminalProceedingItem'

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
    }))
}
