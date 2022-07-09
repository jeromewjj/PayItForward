import React from 'react';
import * as eva from '@eva-design/eva';
import { AppNavigator } from './AppNavigator';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import 'react-native-gesture-handler';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <AppNavigator />
  </ApplicationProvider>
);