# country-search

Hi! :)

This is a simple country searching app, built to remember how plain React works. When you start the app, all countries are displayed and the map is without any pin, centered to see whole world.

## How to run the code

```bash
git clone https://github.com/jkielbaska/country-search.git

cd country-search
npm install
```

### If you want to run app in development mode

```bash
npm run dev
```

Go to [localhost:5173](http://localhost:5173/)

### If you want to run app in preview production mode

```bash
npm run build
npm run preview
```

Go to [localhost:4173](http://localhost:4173/)

## Usage

Country Card Interaction:

- Click on a country card to be transferred to the capital of that country on the map.
- A pin will be displayed on the map at the location of the selected country's capital.

Search Functionality:

- Search for a country by name or capital, or both.
- Example: Typing 'WA' will display both Poland (capital: Warsaw) and Rwanda on the map.

Interactive Map:

- The map is fully interactive, allowing you to:
  Zoom in and out.
- Pan or move around the map to view different parts of the world.

Responsive Design:

- The app is designed to be responsive, ensuring a seamless user experience on various devices, including phones and tablets.

## Technologies Used

```typescript
"react": "^18.2.0"
"react-hook-form": "^7.45.0"
"react-leaflet": "^4.2.1"
"react-redux": "^8.1.0"
"leaflet": "^1.9.4"
"axios": "^1.4.0"
"zod": "^3.21.4"
"typescript": "^5.0.2"
"eslint": "^8.38.0"
"tailwindcss": "^3.3.2"
"daisyui": "^3.1.1"
```

#### enjoy! :)
