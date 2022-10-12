# Design System Project

## Stack

- React
- TypeScript
- Tailwind CSS
- Storybook

## Setup

The project was created using Vite with React and TypeScript options:
```
npm create vite@latest
```

Installing dependencies:
```
npm install
```

Running the application:
```
npm run dev
```

Next step was to install Tailwind CSS and create the config files:
```
npm i -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

Finally, Storybook was configured using Vite and NPM parameters:
```
npx storybook init --builder @storybook/builder-vite --use-npm
```

Running the Storybook:
```
npm run storybook
```

## Another libraries

- **clsx**: for constructing className strings conditionally.
```
npm i --save clsx
```
- **radix-ui/react-slot**: lets you choose which HTML tag you want to use in your component.
```
npm i @radix-ui/react-slot
```
- **phosphor-react**: icon family for React.
```
npm i phosphor-react
```
