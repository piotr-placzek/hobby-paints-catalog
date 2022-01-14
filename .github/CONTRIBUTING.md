<!-- Steps for creating good issues or pull requests. -->
<!-- Links to external documentation, mailing lists, or a code of conduct. -->
<!-- Community and behavioral expectations. -->

# Contributing to HPC

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)


## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.



## How Can I Contribute

Please add all issues and pull request to project named *Agile board*.
The column will be assigned automatically.
Please also assign me as *reviewer*, and assign pull request also to me.

### Reporting Bugs

For report bug please create new issue based on [this](.github/ISSUE_TEMPLATE/bug_report.md) template.

### Suggesting Enhancements

For suggest enhacement please create new issue based on [this](.github/ISSUE_TEMPLATE/feature_request.md) template.
Try to write simple [user story](https://en.wikipedia.org/wiki/User_story).

### Pull Requests

  #### Branch name
  I have adopted the following convention for naming branches: *ISSUE-number_issue-title*.
  - Example:
    - for issue #1 make some improvemnt, 
    - branch name should be equal to `ISSUE-1_make-some-improvement`.
  
  #### PR Title
  Pull request's title should contain reflink and issue's name.
  - Example:
    - for issue #1 make some improvemnt, 
    - pr's title should be equal to `#1 make some improvement`.
  
  #### PR description
  Please create description based on [this](.github/PULL_REQUEST_TEMPLATE/pull_request_template.md) template.

## Styleguides

### Git Commit Messages

Start commit message with issue's reflink and text type som short and informative message about this change.
- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Example: `#1 make some improvement`.

### JavaScript Styleguide

For JS formating use priettier with [this configuration](prettier.config.js).

### Documentation Styleguide

Just use JSDoc syntax ;)
