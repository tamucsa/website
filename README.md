# TAMU CSA Website

This repository contains the source code for the Texas A&M University Computer Science Association (TAMU CSA) website.

## Features

- Event announcements and calendar
- Member resources and documentation
- Contact and social media links
- Responsive design

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/tamucsa/website.git
cd website
npm install
```

### Running Locally

```bash
npm run dev
```

The website will be available at `http://localhost:3000`.

## Contributing

We use the [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) workflow for development. To contribute:

1. **Fork** this repository.
2. **Create a feature branch** from `develop`:

    ```bash
    git checkout develop
    git pull
    git switch -c feature/your-feature
    ```

3. **Make your changes** and commit them:

    ```bash
    git add .
    git commit -m "Describe your feature"
    ```

4. **Push your branch** to your fork:

    ```bash
    git push origin feature/your-feature
    ```

5. **Open a pull request** from your feature branch to the `develop` branch of this repository.

Please ensure your code follows the project's style guidelines and includes relevant documentation or tests.

## Public Relations Chair

If you have any questions, feel free to contact [@akhilk999](https://github.com/akhilk999) about project setup or the previous PR chair.

- I turned off auto-renew, so make sure to renew the domain on Vercel [(csatamu.org)](https://csatamu.org) if you want to keep it.
- Update the GOOGLE_SHEET_ID environment variable whenever a new member point sheet is made
- Whenever updating any environment variables, make sure to update it on both `.env` and the Vercel environment variables menu for deployment.

Also for any future PR Chairs, please update this documentation if you change anything, I want to make sure to keep development as easy as possible for future years and future webmasters too.

## Contact

For questions or suggestions, please contact [TAMU CSA](mailto:tamu.csa1963@gmail.com).
