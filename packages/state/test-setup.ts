import '@testing-library/jest-native/extend-expect';

// Mock react-redux
jest.mock('react-redux', () => {
    const React = require('react'); // Require React inside the mock
    return {
        // Mocked Provider component
        Provider: React.createElement(({ children }: { children: JSX.Element }) => children)
    };
});