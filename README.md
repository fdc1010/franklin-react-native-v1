<!-- Describe your project in brief -->

A starter app showcasing Material Design concepts, using the react-native-paper library to provide Floating Action Button, Navigation, tanstack/react-query among other things.

Uses: Expo v50, React Native 0.73.4, React Navigation 6.1.15, Typescript 5.1.3

# Table of contents

- [Installation](#installation)
- [File Structure](#file-structure)
- [License](#license)
- [Say thanks!](#say-thanks)

# Installation
[(Back to top)](#table-of-contents)

Setup first your .env.local file
```
EXPO_PUBLIC_OMDB_API_KEY="9c670b2"
EXPO_PUBLIC_BASE_URL="https://www.omdbapi.com"
```

```bash
git clone git@github.com:fdc1010/franklin-react-native-v1.git
cd franklin-react-native-v1
pnpm install
npx expo start
```

# File Structure
[(Back to top)](#table-of-contents)

- app
    - api
        - movie
            - movie.hooks.ts
            - movie.requests.ts
    - lib
        - movie
            - models
                - index.ts
                - movie.builder.ts
                - movie.types.ts
                - movie.zod.ts
            - responses
                - index.ts
                - movieGet.builder.ts
                - movieGet.types.ts
                - movieGet.zod.ts
                - moviesGet.builder.ts
                - moviesGet.types.ts
                - moviesGet.zod.ts
        - response
            - models
                - index.ts
                - errprResponse.builder.ts
                - errprResponse.types.ts
                - errprResponse.zod.ts
                - response.builder.ts
                - response.types.ts
                - response.zod.ts
    - screens
        - Details.tsx
        - Home.tsx
        - index.ts
    - util
        - apiDataConverter.ts
        - convertToReadableDate.ts
        - escapeRegExp.ts
        - generateRandomImage.ts
    - wrappers
        - QueryWrapper.tsx
- assets
- mocks

# License
[(Back to top)](#table-of-contents)

<!-- Adding the license to README is a good practice so that people can easily refer to it.--->

[MIT License](https://opensource.org/licenses/MIT)

# Say thanks!
[(Back to top)](#table-of-contents)

If this saved you development time or you otherwise found it useful, leave a star or follow in GitHub.

Note: this one still need enhancements.
