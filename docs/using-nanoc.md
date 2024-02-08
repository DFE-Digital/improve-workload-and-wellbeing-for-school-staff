# Using Nanoc for Static Site Generation

Nanoc is a powerful tool for building static websites. Here’s a brief guide on
how to work with content, such as markdown files, images, and other assets in a
Nanoc project:

## Markdown Files

- **Location**: Markdown files are typically stored in the `content` folder.
  This is where you'll find or create new `.md` files for your website's pages.
- **Creating Content**: To add a new page, create a new markdown file in the
  `content` directory. Name it according to the content or page it represents
  (e.g., `about.md` for an About page).
- **Editing Content**: Edit these markdown files to update the website's
  content. Nanoc will convert these markdown files into HTML during the build
  process.

## Images and Other Assets

- **Assets Directory**: Images, stylesheets, scripts, and other assets are
  usually stored in the `assets` or `static` folder.
- **Adding Images**: Place your image files in the appropriate subdirectory
  (commonly `assets/images`). Reference these images in your markdown or HTML
  files using relative paths.
- **Stylesheets and Scripts**: Similarly, stylesheets (CSS) and JavaScript files
  are stored in folders like `assets/stylesheets` and `assets/javascripts`. Link
  them in your site's template files.

## General Workflow

1. **Edit Markdown Files**: Write or update your content in markdown files
   within the `content` folder.
2. **Manage Assets**: Add or update images, stylesheets, and scripts in the
   `assets` folder.
3. **Build the Site**: Run `nanoc` command to build the site. Nanoc processes
   the markdown and assets to generate the static HTML output.
4. **Preview Locally**: Use `nanoc live` to start a local server to preview your
   site.
5. **Commit Changes**: Once you're satisfied with the changes, commit them to
   your version control system (e.g., Git).

Remember, Nanoc is highly customizable, so your project structure might vary
slightly based on the initial setup and configurations. Always refer to your
project's specific documentation for more detailed instructions.
