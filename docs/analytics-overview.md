# Website Analytics Implementation Overview

## Introduction

This document provides a high-level overview of how the Improve workload and wellbeing for school staff service utilises
Google Analytics 4 (GA4), Google Tag Manager (GTM), cookies, and a consent banner to track user interactions and comply
with privacy regulations.

## Google Analytics 4 (GA4)

GA4 is the latest iteration of Google's analytics service, providing insights into website traffic, user behavior, and
conversion metrics. We use GA4 to:

- Monitor key metrics and performance indicators of our service.
- Understand user behaviour and interactions with our website.
- Improve the service based on data-driven insights.

## Google Tag Manager (GTM)

GTM is a tag management system that allows us to quickly and easily update tags and code snippets on our website, including:

- Deployment and management of GA4 tracking codes.
- Configuration of event tracking for user interactions without altering the source code.
- Managing and testing marketing tags and related code snippets.

## Cookies

Cookies are small data files stored on the user's device, which we use to:

- Remember user preference for analytics tracking.
- Track user activity for analytics and advertising purposes in compliance with our privacy policy.

## Consent Banner

We respect user privacy and comply with legal requirements for data protection. As such, we implement a consent banner that:

- Informs users about the use of cookies and tracking technologies on our website.
- Allows users to give, or deny their consent for data collection.
- Ensures that no tracking cookies are placed without explicit user consent, complying with GDPR, CCPA, and other data
protection laws.

## Consent Management and Data Collection Process

When a user visits our website, the following occurs:

1. By default the `consentStatus` is `false` in the data layer, and GA4 tracking is disabled.
2. The consent banner is displayed, asking the user for their consent to track their interactions.
3. If the user consents, `consentStatus` is set to `true` in the data layer and GA4 tracking is fully enabled.
4. If the user does not consent, `consentStatus` is set to `false` and GA4 tracking is limited to anonymized, aggregate data.
5. GTM uses the `consentStatus` variable to control the firing of tags based on the user's consent.
6. The website will respect the user's choice, and their consent preference will be stored in cookies for future visits.

## Data Privacy and User Control

Our users have control over their data. They can:

- Change their consent preferences at any time via the consent banner or cookies policy page.
- Request access to the data collected by contacting our privacy officer.
- Withdraw consent, which will stop the collection of tracking data and clear related cookies.

## Data Collection with and without Consent Mode

**When consent is given:** Google Analytics functions as normal, collecting full user data including cookies for user
identification, pageview hits, event hits, and so on.

**When consent is not given or is withdrawn:** GA4 enters a restricted data collection mode. In this state, it does not
use cookies for user identification, which means it does not collect any data that is considered personally identifiable
information (PII). Instead, it uses a session-based model for limited data collection, which can include:

- Aggregated data about traffic and general site interaction without user identifiers.
- Conversion tracking (with limitations, as no user-level data is recorded).
- Basic interaction hits (such as page views or non-identifying event hits) with anonymized IP addresses.

## Conclusion

We are committed to transparency and user privacy. Our use of GA4, GTM, and cookies is designed to respect user
preferences and comply with all applicable laws and regulations regarding data privacy and protection.
