# Adding a new resource

All resources are written using Markdown. Markdown files are stored in the
`content` folder. This is where you'll find or create new `.md` files for
resources.

Useful links:

- [Example resource file](example-resource.md)

- [Example pull request](https://github.com/DFE-Digital/improve-school-workload-and-wellbeing/pull/39) -
  this is an example pull request on Github, where a single resource has been
  added. If you make the same changes as in this pull request, you will also
  add a new resource!

## 1. Create your resource file 👩‍💻

Create a new Markdown `.md` file in the correct folder within `content`.

The name of your file and the folder it lives in will dictate its URL.

e.g. if you create a file `establish-a-wellbeing-committee.md` in the
`content/staff-wellbeing` folder, your page will have the following URL:

improve-workload-and-wellbeing-for-school-staff.education.gov.uk/**staff-wellbeing/establish-a-wellbeing-committee**

## 2. Add your resource Markdown ✍️

Using the code in `example-resource.md` as a guide, copy the Markdown for your
resource into your new file.

All resources default to a purple colour scheme. If your resource uses a
different colour scheme, you need to state it at the top of the file:

```
---
title: TITLE
colour: blue
---
```

Possible colours (other than the default purple) are:

- `pink`
- `green`
- `blue`

## 3. Add your resource HTML 🎨

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
```

**Note:** all content in the info box must be written in HTML, not Markdown.

## 4. Add a link to your resource from the 'Explore all resources' page 🔗

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
    created_by: "Notre Dame High School (Secondary)"
  }
)%>
```

## Add a link to your resource from the topic page 🔗

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
    created_by: "Notre Dame High School (Secondary)"
  }
)%>
```

## 5. Make a pull request 🔨

See general guidance on creating a pull request here in [these docs](docs/creating-a-pull-request.md).

## 6. Get your pull request reviewed 🧐

You should get at least one developer and one policy-person to review your pull
request before you merge it and it goes live.

When you make a pull request, you should see a comment appear on GitHub like this:

![netlify preview](<Screenshot 2024-02-08 at 13.50.35.png>)

If you click on the link next to 'Deploy Preview' this will take
you to a preview version of the site with your changes.

You and your reviewers can use this deploy preview to check your
changes.

## 7. Merge your pull request! 🚀

Once your pull request has been reviewed and approved in GitHub you
can click 'Merge pull request'. This will deploy your changes to
production!
