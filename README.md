# Improve School Workload and Wellbeing

Welcome to the README for our static site generator app using Nanoc. This document provides instructions for setting up the application on both MacOS and Windows devices.

## Introduction

This application is built using Nanoc, a powerful static site generator that offers flexibility and a rich set of features for building static websites. Our choice of Nanoc is driven by its robust "Checking" feature, ensuring high-quality content and avoiding regressions.

## Prerequisites

Before you begin, ensure you have the following installed:

- Ruby (version 2.7 or higher)
- RubyGems
- Git

## Setup Instructions

### For MacOS

1. **Install Ruby**:

    Install Ruby using Homebrew.

    ```bash
    brew install ruby
    ```

    Alternatively, you can install Ruby using Ruby Version Manager (RVM).

    ```bash
    curl -sSL https://get.rvm.io | bash -s stable
    rvm install 3.2.2
    ```

2. **Clone the Repository**:

    Clone the project repository from GitHub.

    ```bash
    git clone https://github.com/DFE-Digital/improve-school-workload-and-wellbeing
    cd improve-school-workload-and-wellbeing
    ```

3. **Install Dependencies**:

    Install the necessary Ruby dependencies.

    ```bash
    bundle install
    ```

4. **Run Nanoc**:

    To view the site locally, run Nanoc's built-in server.

    ```bash
    nanoc view
    ```

### For Windows

1. **Install Ruby**:

    Download and install Ruby using RubyInstaller for Windows from <https://rubyinstaller.org/>.

2. **Clone the Repository**:

    Clone the project repository from GitHub.

    ```bash
    git clone https://github.com/DFE-Digital/improve-school-workload-and-wellbeing
    cd improve-school-workload-and-wellbeing
    ```

3. **Install Dependencies**:

    Install the necessary Ruby dependencies.

    ```bash
    bundle install
    ```

4. **Run Nanoc**:

    To view the site locally, run Nanoc's built-in server.

    ```bash
    nanoc view
    ```

## Using Nanoc for Static Site Generation

Nanoc is a powerful tool for building static websites. Here’s a brief guide on how to work with content, such as markdown files, images, and other assets in a Nanoc project:

### Markdown Files

- **Location**: Markdown files are typically stored in the `content` folder. This is where you'll find or create new `.md` files for your website's pages.
- **Creating Content**: To add a new page, create a new markdown file in the `content` directory. Name it according to the content or page it represents (e.g., `about.md` for an About page).
- **Editing Content**: Edit these markdown files to update the website's content. Nanoc will convert these markdown files into HTML during the build process.

### Images and Other Assets

- **Assets Directory**: Images, stylesheets, scripts, and other assets are usually stored in the `assets` or `static` folder.
- **Adding Images**: Place your image files in the appropriate subdirectory (commonly `assets/images`). Reference these images in your markdown or HTML files using relative paths.
- **Stylesheets and Scripts**: Similarly, stylesheets (CSS) and JavaScript files are stored in folders like `assets/stylesheets` and `assets/javascripts`. Link them in your site's template files.

### General Workflow

1. **Edit Markdown Files**: Write or update your content in markdown files within the `content` folder.
2. **Manage Assets**: Add or update images, stylesheets, and scripts in the `assets` folder.
3. **Build the Site**: Run `nanoc` command to build the site. Nanoc processes the markdown and assets to generate the static HTML output.
4. **Preview Locally**: Use `nanoc live` to start a local server to preview your site.
5. **Commit Changes**: Once you're satisfied with the changes, commit them to your version control system (e.g., Git).

Remember, Nanoc is highly customizable, so your project structure might vary slightly based on the initial setup and configurations. Always refer to your project's specific documentation for more detailed instructions.

## Contributing

Contributions to this project are highly valued and we encourage contributions in various forms. Below are guidelines for two different types of contributions: minor edits and larger changes.

### Minor Edits

For small updates such as typo fixes, content updates, or minor markdown changes:

1. **Create a Branch**:
   - Navigate to the GitHub repository.
   - Create a new branch directly on GitHub from the `main` branch. Name it appropriately to reflect the change (e.g., `fix-typo-in-readme`).

2. **Update Content**:
   - In your new branch, navigate to the file you wish to edit.
   - Use GitHub's in-browser editor to make your changes to the markdown file.
   - Commit the changes with a clear and concise commit message.

3. **Create a Pull Request**:
   - Once your changes are committed, open a new pull request against the `main` branch.
   - Provide a brief description of the changes and why they are necessary.
   - Request a review from the project maintainers.

### Larger Changes (Page Layouts or Design)

For more significant updates such as changes to page layouts, design adjustments, or feature additions:

1. **Pull the Main Branch Locally**:
   - Ensure your local repository is up to date with the `main` branch.

    ```bash
    git checkout main
    git pull origin main
    ```

2. Create a New Feature Branch:
   - Create a new branch locally from the `main` branch. Name it appropriately to reflect the change (e.g., `add-new-feature`).

    ```bash
    git checkout -b add-new-feature
    ```

3. **Make Changes**:

    - Make your changes locally.
    - Commit the changes with a clear and concise commit message.

    ```bash
    git add .
    git commit -m "Add new feature"
    ```

4. **Push Changes to GitHub**:

    - Push your changes to the remote repository.

    ```bash
    git push origin add-new-feature
    ```

5. **Create a Pull Request**:

    - Once your changes are pushed, open a new pull request against the `main` branch.
    - Provide a brief description of the changes and why they are necessary.
    - Request a review from the project maintainers.

### General Guidelines

- Ensure your changes are consistent with the [GOV.UK Design System](https://design-system.service.gov.uk/).
- Ensure your changes are consistent with the [GOV.UK Content Style Guide](https://www.gov.uk/guidance/style-guide).
- Ensure your changes are consistent with the [GOV.UK Accessibility Guidance](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps).
