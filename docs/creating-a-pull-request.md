# Creating a pull request

Contributions to this project are highly valued and we encourage contributions
in various forms. Below are guidelines for two different types of contributions:
minor edits and larger changes.

## Minor edits

For small updates such as typo fixes, content updates, or minor markdown changes:

1. **Create a branch**:

   - Navigate to the GitHub repository.
   - Create a new branch directly on GitHub from the `main` branch. Name it
     appropriately to reflect the change (e.g., `fix-typo-in-readme`).

2. **Update content**:

   - In your new branch, navigate to the file you wish to edit.
   - Use GitHub's in-browser editor to make your changes to the markdown file.
   - Commit the changes with a clear and concise commit message.

3. **Create a pull request**:
   - Once your changes are committed, open a new pull request against the `main`
     branch.
   - Provide a brief description of the changes and why they are necessary.
   - Request a review from the project maintainers.

## Larger changes

For more significant updates:

1. **Pull the main branch locally**:

   - Ensure your local repository is up to date with the `main` branch.

   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a new feature branch:

   - Create a new branch locally from the `main` branch. Name it appropriately
     to reflect the change (e.g., `add-new-feature`).

   ```bash
   git checkout -b add-new-feature
   ```

3. **Make changes**:

   - Make your changes locally.
   - Commit the changes with a clear and concise commit message.

   ```bash
   git add .
   git commit -m "Add new feature"
   ```

4. **Push changes to GitHub**:

   - Push your changes to the remote repository.

   ```bash
   git push origin add-new-feature
   ```

5. **Create a pull request**:

   - Once your changes are pushed, open a new pull request against the `main`
     branch.
   - Provide a brief description of the changes and why they are necessary.
   - Request a review from the project maintainers.

## General guidelines

- Ensure your changes are consistent with the [GOV.UK Design System](https://design-system.service.gov.uk/).
- Ensure your changes are consistent with the [GOV.UK Content Style Guide](https://www.gov.uk/guidance/style-guide).
- Ensure your changes are consistent with the [GOV.UK Accessibility Guidance](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps).
