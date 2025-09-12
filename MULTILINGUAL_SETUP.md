# Multilingual Support Setup

This project now supports multilingual functionality with English and Marathi languages using Next.js i18n routing.

## Features Implemented

1. **Next.js i18n Configuration**: Configured in `next.config.ts` with support for English (`en`) and Marathi (`mr`) locales
2. **Translation Files**: JSON-based translation files in `locales/` directory
3. **Language Selection**: Added language dropdown in navbar for both desktop and mobile views
4. **About Page**: Fully translated About page with all content in both languages

## File Structure

```
locales/
├── en/
│   └── common.json    # English translations
└── mr/
    └── common.json    # Marathi translations

lib/
└── i18n.ts           # Translation utility functions

components/
└── Navbar.tsx        # Updated with language selection

app/
└── about/
    └── page.tsx      # Updated to use translations
```

## How to Use

### Adding New Translations

1. Add new keys to both `locales/en/common.json` and `locales/mr/common.json`
2. Use the `useTranslations` hook in your components:

```tsx
import { useTranslations } from "../lib/i18n";

export default function MyComponent() {
  const { t, locale, changeLanguage } = useTranslations();
  
  return (
    <div>
      <h1>{t('myComponent.title')}</h1>
      <p>{t('myComponent.description')}</p>
    </div>
  );
}
```

### Language Switching

The language can be switched using the dropdown in the navbar. The current language is persisted in the URL and browser preferences.

### URL Structure

- English: `/about` or `/en/about`
- Marathi: `/mr/about`

## Translation File Structure

The translation files follow a nested JSON structure:

```json
{
  "navbar": {
    "home": "Home",
    "about": "About Us"
  },
  "about": {
    "title": "About Us",
    "introduction": {
      "title": "Introduction",
      "content1": "Content here..."
    }
  }
}
```

## Adding New Pages

To add multilingual support to new pages:

1. Create translation keys in both language files
2. Import and use the `useTranslations` hook
3. Replace hardcoded text with `t('key.path')` calls
4. For arrays, cast the result: `(t('key.array') as string[])`

## Browser Language Detection

The system automatically detects the user's browser language preference and redirects accordingly. Users can manually switch languages using the navbar dropdown.










