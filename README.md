### Local Development

The repository functions as a complete Hugo site out of the box. To run it locally:

```sh
# Install dependencies
npm install

# Start the development server
hugo server
```

### Getting Started

#### Configuration (`config.yaml`)

Customize the site by modifying the [`config.yaml`](https://github.com/phatcvo/phatcvo.github.io/blob/main/config.yaml).

### Deployment

This theme supports search functionality using [Pagefind](https://pagefind.app/). Before deploying, index your content using the following command:

```sh
hugo && npx -y pagefind --site public
```