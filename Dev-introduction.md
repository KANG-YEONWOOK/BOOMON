# 개발 소개 가이드

이 문서는 nothavemuchtime 모노레포 프로젝트의 구조와 기능별 파일 배치 가이드를 제공합니다.

## 프로젝트 구조 개요

```
nothavemuchtime/
├── apps/
│   ├── api/          # NestJS 백엔드 애플리케이션
│   └── web/          # Next.js 프론트엔드 애플리케이션
├── packages/         # 공유 패키지
├── database/         # 데이터베이스 관련 설정
├── turbo.json        # Turborepo 설정
├── pnpm-workspace.yaml
└── package.json
```

## Next.js 웹 애플리케이션 (apps/web)

### 현재 구조
```
apps/web/
├── src/
│   ├── app/          # App Router 기반 라우팅
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── lib/          # 유틸리티 및 API 클라이언트
│       └── api.ts
├── public/           # 정적 파일
└── package.json
```

### 기능별 파일 추가 가이드

#### 1. 페이지 및 라우팅
- **위치**: `src/app/[기능명]/page.tsx`
- **예시**: 
  - `src/app/products/page.tsx` - 상품 목록 페이지
  - `src/app/products/[id]/page.tsx` - 상품 상세 페이지
  - `src/app/auth/login/page.tsx` - 로그인 페이지

#### 2. 컴포넌트
- **위치**: `src/components/[기능명]/`
- **예시**:
  - `src/components/common/` - 공통 컴포넌트 (Header, Footer, Button 등)
  - `src/components/products/` - 상품 관련 컴포넌트
  - `src/components/auth/` - 인증 관련 컴포넌트

#### 3. 훅 (Hooks)
- **위치**: `src/hooks/`
- **예시**:
  - `src/hooks/useAuth.ts` - 인증 관련 훅
  - `src/hooks/useApi.ts` - API 호출 관련 훅

#### 4. 유틸리티 함수
- **위치**: `src/lib/utils/`
- **예시**:
  - `src/lib/utils/format.ts` - 포맷팅 유틸리티
  - `src/lib/utils/validation.ts` - 유효성 검사 유틸리티

#### 5. 타입 정의
- **위치**: `src/types/`
- **예시**:
  - `src/types/product.ts` - 상품 관련 타입
  - `src/types/user.ts` - 사용자 관련 타입

#### 6. 스타일
- **위치**: 
  - 컴포넌트별: `src/components/[기능명]/[컴포넌트명].module.css`
  - 전역: `src/app/globals.css`

## NestJS API 애플리케이션 (apps/api)

### 현재 구조
```
apps/api/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
└── package.json
```

### 기능별 파일 추가 가이드

#### 1. 모듈
- **위치**: `src/modules/[기능명]/`
- **예시**:
  ```
  src/modules/users/
  ├── users.module.ts
  ├── users.controller.ts
  ├── users.service.ts
  ├── dto/
  │   ├── create-user.dto.ts
  │   └── update-user.dto.ts
  └── entities/
      └── user.entity.ts
  ```

#### 2. 공통 기능
- **위치**: `src/common/`
- **예시**:
  - `src/common/guards/` - 인증/인가 가드
  - `src/common/interceptors/` - 인터셉터
  - `src/common/pipes/` - 파이프
  - `src/common/filters/` - 예외 필터
  - `src/common/decorators/` - 커스텀 데코레이터

#### 3. 설정
- **위치**: `src/config/`
- **예시**:
  - `src/config/database.config.ts` - 데이터베이스 설정
  - `src/config/app.config.ts` - 애플리케이션 설정

#### 4. 유틸리티
- **위치**: `src/utils/`
- **예시**:
  - `src/utils/bcrypt.ts` - 암호화 유틸리티
  - `src/utils/logger.ts` - 로깅 유틸리티

## 공유 패키지 (packages)

공통으로 사용되는 코드는 packages 디렉토리에 별도 패키지로 관리합니다.

### 예시 구조
```
packages/
├── ui/              # 공통 UI 컴포넌트
├── config/          # 공통 설정
├── types/           # 공통 타입 정의
└── utils/           # 공통 유틸리티
```

## 개발 명령어

### 전체 프로젝트
```bash
# 개발 서버 실행 (모든 앱)
pnpm dev

# 빌드
pnpm build

# 린트
pnpm lint
```

### 개별 앱 실행
```bash
# Next.js 앱만 실행
pnpm --filter web dev

# NestJS API만 실행
pnpm --filter api dev
```

## 새 기능 추가 시 체크리스트

1. **기능 분석**
   - 프론트엔드/백엔드 구분
   - 공통 코드 여부 확인

2. **파일 구조 생성**
   - 위 가이드에 따라 적절한 위치에 파일 생성
   - 모듈화 원칙 준수

3. **타입 정의**
   - TypeScript 타입 먼저 정의
   - 공통 타입은 packages로 분리 고려

4. **테스트 작성**
   - 단위 테스트 작성
   - E2E 테스트 필요 시 추가

5. **문서화**
   - 주요 기능에 대한 주석 추가
   - API 엔드포인트 문서화

## 주의사항

- 모든 코드는 TypeScript로 작성
- ESLint, Prettier 규칙 준수
- 커밋 전 `pnpm lint` 실행
- 환경 변수는 각 앱의 `.env` 파일에서 관리