import { defineConfig } from 'vitest/config'

// 앱용 vite.config.js(glsl/restart 플러그인, root: 'src/')와 분리된
// 테스트 전용 설정. vitest는 vite.config.js보다 이 파일을 우선 사용한다.
export default defineConfig({
    test: {
        include: ['src/**/*.test.js'],
        environment: 'node',
    },
})
