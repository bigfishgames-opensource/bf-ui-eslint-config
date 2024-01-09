import { CLIEngine } from 'eslint';
import eslintrc from '../';

const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: eslintrc
});

function lint(text) {
    const linter = cli.executeOnText(text);
    return linter.results[0];
}

describe('"strict" rule', () => {
    test('should error when using strict mode directives', () => {
        const result = lint('"use strict";');
        const { warningCount, errorCount, messages } = result;
        expect(warningCount).toBe(0);
        expect(errorCount).toBeGreaterThan(0);
        expect(messages[0].ruleId).toBe('strict');
    });
});
