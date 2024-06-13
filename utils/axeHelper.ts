import { Page, TestInfo } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

interface AxeViolation {
  id: string;
  impact: string;
  tags: string[];
  description: string;
  help: string;
  helpUrl: string;
  nodes: any[];
}

export async function runAxeScan(page: Page, testInfo: TestInfo) {
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  // Extract descriptions and create a detailed failure message
  const descriptions = accessibilityScanResults.violations.map((violation, index) => {
    return `${index + 1}. ${violation.description}`;
  }).join('\n');

  const failureMessage = `Accessibility Violations Detected (${accessibilityScanResults.violations.length}):\n${descriptions}`;

  // Log the detailed failure message to the console
  console.log(failureMessage);

  // Attach the accessibility scan results to the test info
  testInfo.attach('accessibility-violations', {
    body: JSON.stringify(accessibilityScanResults.violations, null, 2),
    contentType: 'application/json',
  });

  // Return the failure message and the number of violations
  return {
    violations: accessibilityScanResults.violations,
    failureMessage
  };
}
