# _Code Review 6_

#### By _**Taj Empey**_

#### _Converts currency from USD to CAD, EUR, AUD, CHF, GBP, JPY, CNY, HKD and NZD_

## Technologies Used

- _JavaScript_
- _Webpack_
- _Node Package Manager_
- _ESlint_
- _Babel_
- _Postman_

## Description

_Will take an input from the user in USD, the user can then select which currency they would like the value converted to.  Upon submitting the form the application will make a "GET" request to ExchangeRate-API and will return the converted value to the user._

## Setup/Installation Requirements

- _Clone repo from GitHub_
- _Go to https://www.exchangerate-api.com/ and sign up with your email address to generate a free API key_
- _Upon opening the program create a .env file at the top of your directory_
- _Add your API key to .env like so, (API_KEY=YOUR-API-KEY)_
- _Then run "npm install" to install the program's dependencies_
- _Next, run "npm start" to compile the dev environment and launch a webpack server_
- _Fill out the form and receive your converted value_

## Known Bugs

- _Not able to generate custom error messages_

## License

Copyright (c) _11/17/23_ _Taj Empey_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.