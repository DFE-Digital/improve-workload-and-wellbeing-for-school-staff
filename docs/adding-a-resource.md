# Adding a new resource

All resources are written using Markdown. Markdown files are stored in the
`content` folder. This is where you'll find or create new `.md` files for
resources.

Useful links:

- [Example resource file](docs/example-resource.md)

- [Example pull request](https://github.com/DFE-Digital/improve-school-workload-and-wellbeing/pull/39) -
  this is an example pull request on Github, where a single resource has been
  added. If you make the same changes as in this pull request, you will also
  add a new resource!

## 1. Create your resource file

Create a new Markdown `.md` file in the correct folder within `content`.

The name of your file and the folder it lives in will dictate its URL.

e.g. if you create a file `establish-a-wellbeing-committee.md` in the
`content/staff-wellbeing` folder, your page will have the following URL:

improve-workload-and-wellbeing-for-school-staff.education.gov.uk/**staff-wellbeing/establish-a-wellbeing-committee**

## 2. Add your resource Markdown

Using the code in `example-resource.md` as a guide, copy the Markdown for your
resource into your new file.

## 3. Add your resource HTML

Due to their complexity, some elements of your Markdown page will need to be
written in HTML. The following code snippets are used in
`example-resource.md`:

### Resource tag

![resource tag](<Screenshot 2024-02-06 at 12.20.34.png>)

```html
<strong class="govuk-tag">Example</strong>
```

### Info box

![info box](<Screenshot 2024-02-06 at 12.23.49.png>)

```html
<div class="govuk-grid-row dfe-width-container">
  <div class="govuk-grid-column-full">
    <div class="info-box">
      <div class="info-box__corner">
        <img src="/assets/images/bullseye.svg" alt="Bullseye icon" />
      </div>
      <h2 class="govuk-heading-m">Impact and outcomes</h2>
      <p>
        INSERT-IMPACT-AND-OUTCOMES
      </p>
      <p>
        <ul>
          <li>first list item</li>
          <li>second list item</li>
        </ul>
      </p>
    </div>
  </div>
</div>
```

**Note:** all content in the info box must be written in HTML, not Markdown.

**TODO:** How do you pick a different colour for the info box? Dependent on
Staff Wellbeing PR.

## 4. Add a link to your resource from the 'Explore all resources' page

Identify the correct topic for your resource and update the link in the
corresponding explore-all-resources file.

e.g. if you are creating the 'Establish a wellbeing committee' resource and this
is a staff wellbeing topic, open `content/explore-all-resources/staff-wellbeing.html.erb`.

Add your new resource's URL to the correct render block:

```ruby
<%= render('/partials/explore_resource_card.*',
  title: "Establish a wellbeing committee",
  href: "#{@base_url}/staff-wellbeing/establish-a-wellbeing-committee", # <- ADD URL HERE
  tag:  "Wellbeing",
  details: {
    resource_type: "Template",
    reading_time: "4 minutes",
    created_by: "Notre Dame High School"
  }
)%>
```

## Add a link to your resource from the topic page

You may need to add a link to your page from the corresponding topic page.

e.g. if you are creating the 'Establish a wellbeing committee' resource it will
be linked from the `content/staff-wellbeing.html.erb` topic page.

```ruby
<%= render('/partials/resource_card.*',
  title: "Establish a wellbeing committee",
  href: "#{@base_url}/staff-wellbeing/establish-a-wellbeing-committee", # <- ADD URL HERE
  body: "Learn how to set up a wellbeing committee.",
  tag: "Example",
  details: {
    reading_time: "4 minutes",
    created_by: "Notre Dame High School"
  }
)%>
```

## 5. Make a PR!

See general guidance on creating a PR here in [these docs](docs/creating-a-pull-request.md).
