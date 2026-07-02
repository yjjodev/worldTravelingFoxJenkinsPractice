// 여행 경로의 총 이동 거리를 계산하는 순수 함수 (CI 테스트 연습용)
// points: [{ x, y }, ...] 형태의 좌표 배열
export function totalDistance(points) {
    if (!Array.isArray(points) || points.length < 2) {
        return 0
    }

    let sum = 0
    for (let i = 1; i < points.length; i++) {
        const dx = points[i].x - points[i - 1].x
        const dy = points[i].y - points[i - 1].y
        sum += Math.sqrt(dx * dx + dy * dy)
    }
    return sum
}
