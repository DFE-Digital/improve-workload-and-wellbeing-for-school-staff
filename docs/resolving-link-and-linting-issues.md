# Resolving Link and Linting Issues in Contributions

To maintain the quality and reliability of our content, we've integrated linting
and link validation checks into our GitHub Actions CI/CD pipeline. This document
guides you through identifying issues flagged by these checks and resolving them
using our `Makefile` commands.

## Understanding the Checks

Our CI/CD pipeline includes two primary checks for content contributions:

1. **Markdown Linting**: Ensures that Markdown files adhere to our project's
   formatting standards.
2. **Link Validation**: Checks for broken links in the compiled site output to
   ensure all internal and external links are valid.

If either of these checks fails during a GitHub Actions run, your pull request
will indicate a failure, requiring resolution before merging.

## Resolving Issues

### Markdown Linting Issues

If the linting check fails, it typically means there are formatting
discrepancies in your Markdown files.

- **Identify Issues**: Review the output of the GitHub Actions run to see which
  files and specific formatting rules were violated.
- **Auto-Format Locally**: Run the following command in your local environment
  to automatically format all Markdown files according to our project's
  standards:

  `bash make format-md`

- **Review Changes**: Check the auto-formatted files to ensure changes are as
  expected and commit them to your branch.

### Link Validation Issues

A failed link validation check indicates there are broken or invalid links in
your content.

- **Identify Broken Links**: Examine the GitHub Actions output to find which
  links failed the validation check and in which files.
- **Manual Correction**: Update your Markdown files to fix or replace the broken
  links. Use valid URLs and ensure placeholders like `TBC` or `example.com` are
  replaced with final links.
- **Test Locally**: After making changes, you can build the site locally and run
  the link validation check to ensure all links are now valid:

  `bash make check-links`

## Final Steps

After resolving any identified issues by formatting Markdown files and fixing
broken links:

- Commit your changes with a clear message describing the fixes.
- Push the updates to your branch in the GitHub repository.
- The GitHub Actions checks will automatically rerun for your pull request.
  Ensure both checks pass.
- Request a review for your pull request, or if a review was already requested,
  notify reviewers that issues have been addressed.

## vscode Extension

We recommend using the `prettier` extension in Visual Studio Code to help
identify and fix formatting issues in your Markdown files. You can install the
extension from the
[Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

You can also configure vscode to auto-lint upon saving a file by adding the
following to your `.vscode/settings.json`:

```json
{
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```
