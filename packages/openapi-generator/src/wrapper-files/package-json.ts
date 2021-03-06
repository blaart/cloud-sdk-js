/**
 * @experimental This API is experimental and might change in newer versions. Use with caution.
 * Generate the package.json for an openapi client so it can be released as an npm module.
 * @param npmPackageName The name of the npm package.
 * @param description The description of the  npm package.
 * @param sdkVersion The version of the SAP Cloud SDK used.
 * @param versionInPackageJson The version of the npm package.
 * @returns The package.json contents.
 */
export function packageJson(
  npmPackageName: string,
  description: string,
  sdkVersion: string,
  versionInPackageJson?: string
): string {
  return (
    JSON.stringify(
      {
        name: npmPackageName,
        version: versionInPackageJson || sdkVersion,
        description,
        homepage: 'https://sap.github.io/cloud-sdk/docs/js/getting-started',
        main: './index.js',
        types: './index.d.ts',
        publishConfig: {
          access: 'public'
        },
        files: ['**/*.js', '**/*.js.map', '**/*.d.ts', '**/d.ts.map'],
        repository: {
          type: 'git',
          url: ''
        },
        scripts: {
          compile: 'npx tsc',
          doc: 'npx typedoc'
        },
        dependencies: {
          '@sap-cloud-sdk/core': `^${sdkVersion}`
        },
        peerDependencies: {
          '@sap-cloud-sdk/core': `^${sdkVersion}`
        },
        devDependencies: {
          typedoc: '^0.17.0',
          typescript: '~3.8.3'
        }
      },
      null,
      2
    ) + '\n'
  );
}

export const genericDescription = (packageName: string): string =>
  `SAP Cloud SDK for JavaScript: Virtual Data Model (VDM) for OpenAPI service ${packageName
    .split('-')
    .join(' ')}`;
