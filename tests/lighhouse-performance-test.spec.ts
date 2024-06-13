import { playAudit } from "playwright-lighthouse";
import { test } from '@playwright/test';
import desktopConfig from 'lighthouse/lighthouse-core/config/desktop-config.js';
import {runPerformanceAuditInMobile, runPerformanceAuditInDesktop} from "../utils/helpers"

test.describe.only('Lighthouse Performance Test', () => {
  test('Home Page Performance Audit', async ({page}) => {
    await page.goto('/')
    const setView = desktopConfig;
    await runPerformanceAuditInDesktop(page, setView, "https://www.troweprice.com/", "home-page-performance");
  })
  
  test('Desktop - About Page Performance Audit', async ({page}) => {
    const setView = desktopConfig;
    await page.goto('/personal-investing/index.html?&PlacementGUID=p74609731539&AdType=search&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwvIWzBhAlEiwAHHWgvflEN96481VVijR0BTbiw2Nk51890sfHq2OV93BmGKIM-664Ve4jfRoCgQQQAvD_BwE')
    await runPerformanceAuditInDesktop(page, setView,"https://www.troweprice.com/personal-investing/index.html?&PlacementGUID=p74609731539&AdType=search&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwvIWzBhAlEiwAHHWgvflEN96481VVijR0BTbiw2Nk51890sfHq2OV93BmGKIM-664Ve4jfRoCgQQQAvD_BwE", "about-page-performance");
  })

  test('Mobile - Fund Page Performance Audit', async ({page}) => {
    const setView = "lighthouse:default";
    await page.goto('/personal-investing/index.html?&PlacementGUID=p74609731539&AdType=search&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwvIWzBhAlEiwAHHWgvflEN96481VVijR0BTbiw2Nk51890sfHq2OV93BmGKIM-664Ve4jfRoCgQQQAvD_BwE')
    await runPerformanceAuditInMobile(page, "https://www.troweprice.com/personal-investing/index.html?&PlacementGUID=p74609731539&AdType=search&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwvIWzBhAlEiwAHHWgvflEN96481VVijR0BTbiw2Nk51890sfHq2OV93BmGKIM-664Ve4jfRoCgQQQAvD_BwE", "fund-page-performance");
  })
})
