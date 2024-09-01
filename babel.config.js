module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        verbose: false,
        blacklist: null, // Blacklist environment variables if needed
        whitelist: null, // Whitelist environment variables if needed
        safe: false, // If you want to use dotenv-safe
        allowUndefined: true, // Allow undefined variables
      },
    ],
  ],
};
