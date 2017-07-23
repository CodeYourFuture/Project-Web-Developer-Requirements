# CYF Web Developer London test requirements

## Deadlines and commmunication

- The deadline is 6th of August.
- Commit often, and update your Pull Request after each stage, and ask a mentor to review it.
- We expect status updates on your progress on **Friday 28th of July** and **Thursday 3rd August** by email to **cyf.tests@gmail.com** (addressed to CodeYourFuture)
    - Write a professional email addressing us (the client) asking for more details. Even though most of our communication is through Slack, Emails remain an important communication tool (especially when applying for jobs).
- Continue communicating on Slack as usual
- *Important* - this page will be a starting point for future work including
  node.js/server side development.

## Instructions

1. **Build the page in the [image attached](./assets/creative.png) using valid HTML/CSS**

    - Please build the page so that it has all the features shown in the attached image, using the guidelines below. You are free to add your own creative design to it. If you would like to add additional features or styling, you are encouraged to do so.

    - We want to see how you build the page, so please do not use any libraries or frameworks.

    - Do not use a library for JavaScript (don’t use jQuery) - just plain **vanilla JavaScript**.

2. **Show/Hide news Item**

    - This functionality will be implemented using JavaScript - when the User clicks on a news items, it should hide. When they click again, it should show.

3. **’More Information’ form**

    - The ‘More Information’ form should include client-side validation.
    - The creative identifies what fields in the form are required, but there are also some additional levels of validation that should be implemented. The complete set of requirements regarding validation is as follows:

    - The field ‘Contact name’ is required and needs to be populated to allow submission

    - The field ‘Contact email address’ is required and needs to be populated to allow submission

    - The field ‘Contact email address’ needs to conform to the format of an email address to allow submission.

    - The field ‘Contact phone number’ is NOT required, although, if this field is populated, it must contain only digits and be a maximum of 11 characters long upon submission.

4. **Submitting the form with an AJAX call**

    - We want the list of news to be populated dynamically from an API using an AJAX call. Once you have the first three requirements met, then please contact us to get the exact requirements for the API call.

    - The form should dissapear after a successful AJAX call with an acknowledgment that the user has successfully submitted their details.

    - If there is an error upon submission, a user friendly error message
      should be displayed. 

5. **Populating news with an AJAX call**

    - We want the list of news to be populated dynamically from an API using an AJAX call. Once you have the first three requirements met, then please contact us to get the exact requirements for the API call.

    - Contact us by email at cyf.tests@gmail.com NOT on Slack - with the subject of the email being “API requirements”

## General requirements and considerations
Generally, you should build the web page in the way that you feel it should be built, however the following should be taken into consideration:

1. **Accessibility**: Ensure that your mark-up takes into account basic accessibility standards. For example, ensure form fields are accessible; that the page can be viewed and used without the need for JavaScript to be enabled and any alt attributes and similar are set. Please also consider page weight when saving images.

> Google and read about accessibility if you don’t understand this requirement

2. **Standards compliance**: Ensure that your mark-up is W3C compliant. For example, all tags are correctly closed, tags are nested correctly and that all necessary attributes for a tag are set. Your page should validate against the online W3C checker.

3. **Semantics**: Ensure that your mark-up is semantic. For example, header tags are used where relevant, information follows a logical flow throughout the document and that information is displayed using the most appropriate tag.

4. **JavaScript**: Ensure you write neat, tidy JavaScript that you would consider suitable for a live web site. If you test your code (or even better use TDD), this will be a bonus!

5. **Browsers**: We only care about it running on the latest Google Chrome and one of (Safari, Firefox or Internet Explorer 10+) - always test your page on these two browsers.
