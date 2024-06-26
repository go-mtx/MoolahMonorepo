import { createContext, useCallback, useState } from 'react';
import { ThemeProvider } from '@rneui/themed'; // Import from React Native Elements
import { MoolahDropdown, DropdownData } from '../components/dropdown';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  contentActions,
  selectContentData,
  useAppDispatch,
  useAppSelector,
} from 'state';

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
  const [currentTheme, setCurrentThemeState] = useState(THEMES[0]);

  const dispatch = useAppDispatch();

  const { top } = useSafeAreaInsets();
  const contentData = useAppSelector(selectContentData);
  //   TODO - configure
  const mode = 'dark';

  const setTheme = useCallback(
    ({ label, value }: DropdownData<string>) => {
      setCurrentThemeState({ label, value });
      dispatch(contentActions.requestContent(value));
    },
    [dispatch]
  );

  return (
    <ThemeProvider theme={{ ...contentData?.currentTheme }}>
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
          mode,
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
