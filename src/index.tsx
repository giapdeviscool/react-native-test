import { getHostComponent } from 'react-native-nitro-modules';
const TestConfig = require('../nitrogen/generated/shared/json/TestConfig.json');
import type {
  TestMethods,
  TestProps,
} from './Test.nitro';

export const TestView = getHostComponent<
  TestProps,
  TestMethods
>('Test', () => TestConfig);
