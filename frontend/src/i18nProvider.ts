//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    UserFiles: {
      name: 'User Files',
      fields: {
        fileName: 'File Name',
        fileType: 'File Type',
        uploadDate: 'Upload Date',
        id: 'id',
      },
    },
    ConversionFormats: {
      name: 'Conversion Formats',
      fields: {
        formatName: 'Format Name',
        formatType: 'Format Type',
        supportedFileTypes: 'Supported File Types',
        id: 'id',
      },
    },
    ConversionTasks: {
      name: 'Conversion Tasks',
      fields: {
        taskId: 'Task Id',
        sourceFileId: 'Source File Id',
        targetFormat: 'Target Format',
        conversionStatus: 'Conversion Status',
        completionDate: 'Completion Date',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    UserFiles: {
      name: 'User Files (fr)',
      fields: {
        fileName: 'File Name (fr)',
        fileType: 'File Type (fr)',
        uploadDate: 'Upload Date (fr)',
        id: 'id',
      },
    },
    ConversionFormats: {
      name: 'Conversion Formats (fr)',
      fields: {
        formatName: 'Format Name (fr)',
        formatType: 'Format Type (fr)',
        supportedFileTypes: 'Supported File Types (fr)',
        id: 'id',
      },
    },
    ConversionTasks: {
      name: 'Conversion Tasks (fr)',
      fields: {
        taskId: 'Task Id (fr)',
        sourceFileId: 'Source File Id (fr)',
        targetFormat: 'Target Format (fr)',
        conversionStatus: 'Conversion Status (fr)',
        completionDate: 'Completion Date (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
