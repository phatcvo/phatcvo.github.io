### 🧪 Local Development

The repository functions as a complete Hugo site out of the box. To run it locally:

```sh
# Install dependencies
npm install

# Start the development server
hugo server
```

### 🔧 Getting Started

#### Configuration (`config.yaml`)

Customize the theme by modifying the [`config.yaml`](https://github.com/phatcvo/phatcvo.github.io/blob/main/config.yaml).

Key customization options:

- Define which sections appear in the accordion.
- Control the order of sections.
- Choose which section should be expanded by default.

#### Theme Modes

To configure the theme mode, modify the `params.theme.mainTheme` attribute in `config.yaml`.

- **Light Mode** (`light`)
- **Dark Mode** (`dark`)
- **Auto Mode** (`null` - adjusts based on user’s device settings)

### 📦 Deployment

This theme supports search functionality using [Pagefind](https://pagefind.app/). Before deploying, index your content using the following command:

```sh
hugo && npx -y pagefind --site public
```
