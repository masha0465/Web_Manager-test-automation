# Web_Manager-test-automation

* Playwright 기반 E2E 테스트 자동화 설계

로그인 등 주요 시나리오를 테스트하는 스크립트 작성 및 실행

* 테스트 코드 작성 및 환경 구성

TypeScript로 테스트 코드 작성, 환경 변수로 계정 정보 등 관리

* GitHub 저장소 생성 및 연동

로컬 프로젝트를 GitHub에 연결해 버전 관리 체계 수립

* GitHub Actions 기반 CI/CD 파이프라인 구축

.github/workflows에 Playwright 테스트 자동 실행 워크플로(YAML) 작성

코드 변경(push, PR) 시마다 자동으로 테스트 실행 및 리포트 생성

* 워크플로우 최신화 및 오류 해결

deprecated된 upload-artifact 액션을 v4로 업데이트하여 실행 오류 해결

* Git을 통한 협업 및 관리

원격 저장소와 로컬 동기화, 권한 및 충돌 관리 등 Git 기본 사용법 습득
