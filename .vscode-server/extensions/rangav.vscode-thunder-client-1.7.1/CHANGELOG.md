# Change Log

Thunder Client Changelog

### 1.7.1 - (2021-07-14)

**Bug Fixes**

- Fixes Text Response not working in v1.7.0 [#265](https://github.com/rangav/thunder-client-support/issues/265)

### 1.7.0 - (2021-07-13)

**New Features**

- Duplicate Folder & Collection option
- Import Environment from .env file [#74](https://github.com/rangav/thunder-client-support/issues/74)
- Show Request View Vertically in Split Mode [#99](https://github.com/rangav/thunder-client-support/issues/99)
- Display of response for images [#97](https://github.com/rangav/thunder-client-support/issues/97)
- Sort Env using Drag & Drop
- Support client certificate auth using mutual TLS [#130](https://github.com/rangav/thunder-client-support/issues/130)
- System variable {{#guid}} added [#253](https://github.com/rangav/thunder-client-support/issues/253)

**Bug Fixes**

- Fixes Response Window is Missing on Zoom out [#205](https://github.com/rangav/thunder-client-support/issues/205)
- Fixes NO-BREAK SPACE Issue [#199](https://github.com/rangav/thunder-client-support/issues/199)
- Hide SetTo action option in Tests Tab [#242](https://github.com/rangav/thunder-client-support/issues/242)

### 1.6.1 - (2021-06-29)

**Bug Fixes**

- Fixes Basic auth not working in v1.6.0 [#241](https://github.com/rangav/thunder-client-support/issues/241)

### 1.6.0 - (2021-06-29)

**New Features**

- Duplicate Environment option [#232](https://github.com/rangav/thunder-client-support/issues/232)
- Codegen is now separate project, open for contribution on [github](https://github.com/rangav/thunder-codegen)

**Bug Fixes**

- Fixes Environment View display error [#240](https://github.com/rangav/thunder-client-support/issues/240)
- Fix codegen curl space after backslash [#228](https://github.com/rangav/thunder-client-support/issues/228)

### 1.5.0 - (2021-06-24)

**New Features**

- Code Snippet Generation support for Curl, C# HttpClient, Javascript, Python. Click on `{ }` icon for Code tab
- Save Disables Inputs for Query & Form
- Postman import disabled fields
- Env Tab `Set Default` option renamed to `Set Active`

**Bug Fixes**

- Fixes Env View special chars display error [#215](https://github.com/rangav/thunder-client-support/issues/215) [#201](https://github.com/rangav/thunder-client-support/issues/201)
- Fixes Html preview should be based on response data [#190](https://github.com/rangav/thunder-client-support/issues/190) [#192](https://github.com/rangav/thunder-client-support/issues/192)

### 1.4.1 - (2021-06-08)

**Bug Fixes**

- Fixes Import Env Bug
- Fixes Tests Env bug

### 1.4.0 - (2021-06-03)

**New Features**

- Clear All Acticity Menu Option
- Sorting of Collections now possible
- Sort Tests using Drag & Drop
- Run Request on Enter key
- Views File Icon added
- Lincese file included

**Bug Fixes**

- Fixes Form-encoded fields encoding issue [#174](https://github.com/rangav/thunder-client-support/issues/174)
- Fixes Query parameter that ends with '=' gets cleared [#166](https://github.com/rangav/thunder-client-support/issues/166)
- Fixes Tests bool true/false and null check tests
- Fixes When no response, set env var error [#180](https://github.com/rangav/thunder-client-support/issues/180)
- Fixes remove plus sign encoding from URL

### 1.3.0 - (2021-05-18)

**Announcement**

- We have crossed **100K downloads** from vscode marketplace, thanks everyone for the support.

**New Features**

- Import Curl Command
- Html Preview option for Html response.
- System/Dynamic Variables for random values of string, number email, date
- Headers bulk/raw edit mode
- OAuth 2.0 password credentials option
- Support relative paths for git folder location, see readme.
- Proxy exclude hosts option in settings
- Environment Variables multi-level expansion

**Bug Fixes**

- Fixes OAuth 2 client authentication option missing
- Fixes Empty thunderclient.db files created for every project
- Fixes New request window not created in active split pane
- Fixes {{envVar}} in test is replaced with actual value after the test runs
- Request Url encoding issues fixes

### 1.2.2 - (2021-05-07)

**Feature Changed**

- The set variable from header and cookie implementation changed
  - The prefix for set var from header is `header.` instead of `h:`
  - The prefix for set var from cookie is `cookie.` instead of `c:`
  - See documentation for updated details
- The set env var fields are green color highlighted now.

### 1.2.1 - (2021-05-06)

**New Features**

- File Upload feature now supports field name
- Set Env Var from text response, Headers and Cookie.
- Run Collection Requests are clickable links.
- Format json text when header is text/plain
- Enable Body in GET request

**Bug Fixes**

- Fixes space not encoded in Url
- Fixes Request error causes spinning without finishing
- Fixes Postman Import failed error for files
- Fixes Basic auth password should not be plain text field

### 1.2.0 - (2021-05-03)

**New Features**

- File Upload feature in Post Body
- Postman Import files support

**Bug Fixes**

- Fixes 'Failed to import' error message after cancelling Collections import
- Fixes + plus sign in query parameter not escaping
- Fixes Expands the variable name nested inside another var value
- Fixes Run Collection folders & requests sort order wrong

### 1.1.0 - (2021-04-29)

This will be major release with team features.

- **Custom Storage Location** for Collections, useful for teams to integrate with git
- **Nested folder support** for Collections
- Improved request creation workflow to save to collections faster
- **Run Last Request** from command palette.
- **Drap & Drop sorting** for requests & folders
- Support Ctrl+S to save env vars
- Create variable in env if doesn't exist when set
- Postman import nested folder support
- Proxy Support
- Lot of Bug fixes

For complete details of the update [visit here](https://github.com/rangav/thunder-client-support/issues/14)

### 1.0.7 - (2021-04-08)

- Fixed Postman Import error when request url is empty

### 1.0.6 - (2021-04-07)

- Fixes Postman import request body issue
- Cmd/Ctrl+Enter to execute request
- Set Environment Variable in Tests tab

### 1.0.5 - (2021-04-01)

- privacy and import/export sections added to readme

### 1.0.3 - (2021-03-31)

- Initial Release - Official Launch

### 1.0.0 - (2021-03-30)

- Testing Live
