import { promises, readFileSync } from 'fs';
import { join, resolve } from 'path';
import { codeBlock } from '@sap-cloud-sdk/util';
const { writeFile } = promises;

/**
 * @experimental This API is experimental and might change in newer versions. Use with caution.
 * Write a file generated by the SAP Cloud SDK for JavaScript.
 * @param directoryPath Path of the directory to write to.
 * @param fileName Name of the file to write
 * @param content Content to be written to the file. A copyright statement will be added to this.
 * @param overwrite Whether or not existing files should be overwritten.
 * @param withCopyright Whether the generated file contains the copyright information.
 */
export async function createFile(
  directoryPath: string,
  fileName: string,
  content: string,
  overwrite: boolean,
  withCopyright = true
): Promise<void> {
  return writeFile(
    join(directoryPath, fileName),
    withCopyright ? wrapContent(content) : content,
    {
      encoding: 'utf8',
      flag: overwrite ? 'w' : 'wx'
    }
  );
}

function wrapContent(content: string): string {
  return (
    codeBlock`
/*
 * Copyright (c) ${new Date().getFullYear()} SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
${content}
` + '\n'
  );
}

/**
 * @experimental This API is experimental and might change in newer versions. Use with caution.
 * Copy a file from a given path.
 * @param fromPath Path of the original file to be copied.
 * @param toFileName File name of the new file.
 * @param toDirectoryPath Path of the directory to write to.
 * @param overwrite Whether or not existing files should be overwritten.
 */
export async function copyFile(
  fromPath: string,
  toFileName: string,
  toDirectoryPath: string,
  overwrite: boolean
): Promise<void> {
  const fileContent = readFileSync(resolve(fromPath), { encoding: 'utf8' });
  return createFile(toDirectoryPath, toFileName, fileContent, overwrite, false);
}
