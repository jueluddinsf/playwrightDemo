import { Eyes, ClassicRunner, Target, Configuration, BatchInfo } from '@applitools/eyes-playwright';
import { Page } from '@playwright/test';

const runner = new ClassicRunner();
const eyes = new Eyes(runner);

const config = new Configuration();
config.setApiKey('eaF94ggSVYEIkQfoVHeByGu105QGonQWEw375WvSW6zm4110');
config.setBatch(new BatchInfo('T. Rowe Price Homepage Batch'));

eyes.setConfiguration(config);

export async function openEyes(page: Page, testName: string, viewportSize: { width: number, height: number }) {
  await eyes.open(page, 'T. Rowe Price', testName, viewportSize);
}

export async function checkWindow(testName: string) {
  await eyes.check(testName, Target.window().fully());
}

export async function closeEyes() {
  await eyes.close();
}

export async function abortEyes() {
  await eyes.abortIfNotClosed();
}
