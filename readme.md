# Description

This package will return the provider belonging to a Kenyan phone number. The possible return values are:

*   `safaricom`
*   `airtel`
*   `telkom`
*   `faiba`
*   `equitel`
*   `unknown`

# Usage

This package only works when passing in E.164 formatted phone numbers.

```javascript
const providers = require("providers-kenya")
const provider = providers.identify("+254701234567")
// safaricom
```
