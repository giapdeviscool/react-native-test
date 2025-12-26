import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules';

export interface TestProps extends HybridViewProps {
  color: string;
}
export interface TestMethods extends HybridViewMethods {}

export type Test = HybridView<
  TestProps,
  TestMethods
>;
