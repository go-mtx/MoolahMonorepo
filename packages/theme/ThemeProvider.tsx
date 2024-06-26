import { createContext, useCallback, useState } from 'react';
import { MoolahDropdown, DropdownData } from '../components/dropdown';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  contentActions,
  selectContentData,
  useAppDispatch,
  useAppSelector,
} from 'state';

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import { useColorScheme } from './hooks/useColorScheme';
// Create a custom theme context
const MoolahThemeContext = createContext({
  mode: 'light', // Default theme
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: (_: DropdownData<string>) => {}, // Empty function for initial state
});

// Theme provider component with state management
export const MoolahThemeProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentThemeState] = useState(THEMES[0]);

  const dispatch = useAppDispatch();

  const { top } = useSafeAreaInsets();
  const contentData = useAppSelector(selectContentData);

  const setTheme = useCallback(
    ({ label, value }: DropdownData<string>) => {
      setCurrentThemeState({ label, value });
      dispatch(contentActions.requestContent(value));
    },
    [dispatch]
  );

  return (
    <ThemeProvider value={contentData?.currentTheme || colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {process.env.EXPO_PUBLIC_ENV === 'dev' ? (
        <MoolahDropdown
          data={THEMES}
          value={currentTheme}
          setValue={setTheme}
          containerStyle={{ marginTop: top || 10 }}
        />
      ) : null}
      <MoolahThemeContext.Provider
        value={{
          mode: colorScheme || '',
          toggleTheme: setTheme,
        }}
      >
        {children}
      </MoolahThemeContext.Provider>
    </ThemeProvider>
  );
};

/**
 * TEST THEMES
 */
const THEMES = [
  { label: 'original', value: '7qdpvoaG3m37wThiSwff0E' },
  { label: 'mono', value: '4ziINxTpU58pwd23ENQWGa' },
  { label: 'vibrant', value: '6ScpwhgQGlbcfk0btlUBes' },
  { label: 'nature', value: '6vpatF8BiJCfCJwNsr3mgx' },
];
