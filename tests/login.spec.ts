import { test, expect } from '@playwright/test';

test('로그인 성공 시나리오', async ({ page }) => {
  // CI 환경에서는 이 테스트를 건너뜀
  test.skip(!!process.env.CI, 'CI 환경에서는 내부망 접근이 불가하여 테스트를 건너뜁니다.');
  // 1. 로그인 페이지 접속
  await page.goto('https://10.77.164.210/web-manager/login');

  // 2. 아이디 입력
  await page.fill('#input-3', 'admin');

  // 3. 비밀번호 입력
  await page.fill('#input-5', 'Dbsafer00))');

  // 4. 로그인 버튼 클릭
  await page.getByRole('button', { name: '로그인' }).click();

  // 5. 로그인 성공 확인 (예: URL 변경, 특정 텍스트 노출 등)
  // 로그인 성공 후, 정확한 URL로 이동했는지 확인
  await expect(page).toHaveURL('https://10.77.164.210/web-manager/admin/monitoring/server');

  // 또는 await expect(page.getByText('로그아웃')).toBeVisible();
});
