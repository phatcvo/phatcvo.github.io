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


# Compiling the book locally (Ubuntu)

It's convenient to compile the book locally when making edits. The following
steps will help you install the necessary tools.

### Dependencies

Install these system dependencies:
```bash
sudo apt-get install libfontconfig1-dev libgraphite2-dev libharfbuzz-dev libicu-dev libssl-dev zlib1g-dev
```

Then install Rust and Cargo (if you don't have them already) by following the instructions at this link:
* https://www.rust-lang.org/tools/install

Now use `cargo` to install `mdbook`:
```bash
cargo install mdbook mdbook-open-on-gh
```

### Compiling the book

```
mdbook build
```
Then you can view the output:
```
firefox book/index.html
```

Alternatively, `mdbuild` can automatically trigger a rebuild on edits to
any source file:
```
mdbook watch
```