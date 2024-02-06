# Removing a resource

In order to fully remove a resource, you need to:

1. remove the resource itself
2. remove links to the resource from other pages

## 1. Remove the resource

Delete the file containing the resource Markdown. This will be somewhere in the
`content` folder.

## 2. Remove the link from the 'Explore all resources page'

Find the code in the `explore-all-resources` folder which links to the resource.

It will look something like this:

```ruby
<%= render('/partials/explore_resource_card.*',
  title: "Establishing a wellbeing committee",
  href: "#{@base_url}/staff-wellbeing/establish-a-wellbeing-committee",
  tag:  "Wellbeing",
  details: {
    resource_type: "Template",
    reading_time: "4 minutes",
    created_by: "Notre Dame High School"
  }
)%>
```

Delete the entire render block between the `<%=` and `%>`.

## 3. Remove any other links to the resource

It might be useful to search the code for the URL of your resource e.g.
`/staff-wellbeing/establish-a-wellbeing-committee`.

You may find it is linked from a topic page like this:

```ruby
<%= render('/partials/resource_card.*',
  title: "Establishing a wellbeing committee",
  href: "#{@base_url}/staff-wellbeing/establish-a-wellbeing-committee",
  body: "Learn how to set up a wellbeing committee.",
  tag: "Example",
  details: {
    reading_time: "4 minutes",
    created_by: "Notre Dame High School"
  }
)%>
```

Delete the entire render block between the `<%=` and `%>`.

## 4. Make a PR!

See general guidance on creating a PR here in [these docs](docs/creating-a-pull-request.md).
