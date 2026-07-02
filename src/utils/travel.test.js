import { describe, it, expect } from 'vitest'
import { totalDistance } from './travel.js'

describe('totalDistance', () => {
    it('점이 2개 미만이면 0을 반환한다', () => {
        expect(totalDistance([])).toBe(0)
        expect(totalDistance([{ x: 0, y: 0 }])).toBe(0)
    })

    it('두 점 사이의 직선 거리를 계산한다', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 3, y: 4 },
        ]
        expect(totalDistance(points)).toBe(5) // 3-4-5 직각삼각형
    })

    it('여러 구간의 거리를 모두 더한다', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 3, y: 4 }, // +5
            { x: 3, y: 4 }, // +0
            { x: 6, y: 8 }, // +5
        ]
        expect(totalDistance(points)).toBe(10)
    })

    it('배열이 아니면 0을 반환한다', () => {
        expect(totalDistance(null)).toBe(0)
        expect(totalDistance(undefined)).toBe(0)
    })
})
