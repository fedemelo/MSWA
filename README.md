<h1 align="center">Melanoma Segmentation Web Application</h1>

<p align="center">
   <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/framework-Next.js-000000.svg" alt="Framework: Next.js"></a>
   <a href="https://mui.com/"><img src="https://img.shields.io/badge/ui-MUI-blue" alt="UI: MUI"></a>
   <a href="https://yarnpkg.com/"><img src="https://img.shields.io/badge/package%20manager-yarn-2C8EBB" alt="Package Manager: Yarn"></a>
</p>

---

The Melanoma Segmentation Web Application is a Next.js-based web application designed for doctors to upload dermoscopic images and leverage advanced machine learning models to detect and segment malignant melanoma regions. The frontend communicates with the [Melanoma Segmentation API](https://github.com/fedemelo/MSAPI) to provide seamless functionality.

## Local Setup

This project uses [Node.js 20+](https://nodejs.org/en/) and Yarn as the package manager. Ensure these are installed before proceeding.

### Dependencies

1. Clone the repository and navigate to the project directory:

   ```shell
   git clone https://github.com/fedemelo/MSWA
   cd mswa
   ```

2. Install dependencies:

   ```shell
   yarn install
   ```

### Environment Variables

3. Create an `.env.local` file in the root of the project and configure the following environment variable:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/v1.0
   ```

   The `NEXT_PUBLIC_API_BASE_URL` is the base URL of the backend API, [MSAPI](https://github.com/fedemelo/MSAPI).

### Running the Development Server

4. Start the development server:

   ```shell
   yarn dev
   ```

   The frontend will be running at `http://localhost:3000`.

## Code Quality

### Linting and Formatting

The project uses ESLint for linting and Prettier for code formatting. Run the following command to lint and format the code:

```shell
yarn lint && yarn format
```
