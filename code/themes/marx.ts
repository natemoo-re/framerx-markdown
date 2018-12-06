// https://mblode.github.io/marx/
export default `
/*! Marx v3.0.0 - The classless CSS reset (perfect for Communists) | MIT License | https://github.com/mblode/marx */
main,
header,
footer,
article,
section,
aside,
details,
summary {
  margin: 0 auto;
  margin-bottom: 16px;
  width: 100%; }

main {
  display: block;
  margin: 0 auto;
  max-width: 768px;
  padding: 0 16px 16px; }

footer {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  clear: both;
  display: inline-block;
  float: left;
  max-width: 100%;
  padding: 16px 0;
  text-align: center; }
  footer p {
    margin-bottom: 0; }

hr {
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
  overflow: visible; }

img {
  height: auto;
  max-width: 100%;
  vertical-align: baseline; }

@media screen and (max-width: 400px) {
  article,
  section,
  aside {
    clear: both;
    display: block;
    max-width: 100%; }
  img {
    margin-right: 16px; } }

embed,
iframe,
video {
  border: 0; }

body {
  color: rgba(0, 0, 0, 0.8);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  line-height: 1.5; }

p {
  margin: 0;
  margin-bottom: 16px; }

h1,
h2,
h3,
h4,
h5,
h6 {
  color: inherit;
  font-family: inherit;
  line-height: 1.2;
  font-weight: 500; }

h1 {
  font-size: 40px;
  margin: 20px 0 16px; }

h2 {
  font-size: 32px;
  margin: 20px 0 16px; }

h3 {
  font-size: 28px;
  margin: 16px 0 4px; }

h4 {
  font-size: 24px;
  margin: 16px 0 4px; }

h5 {
  font-size: 20px;
  margin: 16px 0 4px; }

h6 {
  font-size: 16px;
  margin: 16px 0 4px; }

small {
  color: rgba(0, 0, 0, 0.54);
  vertical-align: bottom; }

pre {
  background: #f7f7f9;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 16px;
  margin: 16px 0;
  padding: 16px;
  white-space: pre-wrap;
  overflow-wrap: break-word; }

code {
  color: rgba(0, 0, 0, 0.8);
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 16px;
  line-height: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  word-break: break-all;
  word-wrap: break-word; }

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent; }
  a:hover, a:focus {
    color: #0062cc;
    text-decoration: underline; }

dl {
  margin-bottom: 16px; }

dd {
  margin-left: 40px; }

ul,
ol {
  margin-bottom: 8px;
  padding-left: 40px;
  vertical-align: baseline; }

blockquote {
  border-left: 2px solid rgba(0, 0, 0, 0.8);
  font-family: Georgia, Times, "Times New Roman", serif;
  font-style: italic;
  margin: 16px 0;
  padding-left: 16px; }

figcaption {
  font-family: Georgia, Times, "Times New Roman", serif; }

u {
  text-decoration: underline; }

s {
  text-decoration: line-through; }

sup {
  font-size: 14px;
  vertical-align: super; }

sub {
  font-size: 14px;
  vertical-align: sub; }

mark {
  background: #ffeb3b; }

input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="datetime"],
input[type="datetime-local"],
input[type="week"],
input[type="number"],
input[type="search"],
input[type="tel"],
select,
textarea {
  background: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 1.5;
  -webkit-transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }

input[type="color"] {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle; }

input:not([type]) {
  -webkit-appearance: none;
  background: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 1.5;
  -webkit-transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  text-align: left; }

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
select:focus,
textarea:focus {
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }

input:not([type]):focus {
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }

input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: 1px thin rgba(0, 0, 0, 0.12); }

input[type="text"][disabled],
input[type="password"][disabled],
input[type="email"][disabled],
input[type="url"][disabled],
input[type="date"][disabled],
input[type="month"][disabled],
input[type="time"][disabled],
input[type="datetime"][disabled],
input[type="datetime-local"][disabled],
input[type="week"][disabled],
input[type="number"][disabled],
input[type="search"][disabled],
input[type="tel"][disabled],
input[type="color"][disabled],
select[disabled],
textarea[disabled] {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.54);
  cursor: not-allowed;
  opacity: 1; }

input:not([type])[disabled] {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.54);
  cursor: not-allowed;
  opacity: 1; }

input[readonly],
select[readonly],
textarea[readonly] {
  border-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.54); }

input:focus:invalid,
textarea:focus:invalid,
select:focus:invalid {
  border-color: #ea1c0d;
  color: #f44336; }

input[type="file"]:focus:invalid:focus,
input[type="radio"]:focus:invalid:focus,
input[type="checkbox"]:focus:invalid:focus {
  outline-color: #f44336; }

select {
  -webkit-appearance: menulist-button;
  border: 1px solid rgba(0, 0, 0, 0.12);
  vertical-align: sub; }

select:not([size]):not([multiple]) {
  height: -webkit-calc(2.25rem + 2px);
  height: calc(2.25rem + 2px); }

select[multiple] {
  height: auto; }

label {
  display: inline-block;
  line-height: 2; }

fieldset {
  border: 0;
  margin: 0;
  padding: 8px 0; }

legend {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.8);
  display: block;
  margin-bottom: 8px;
  padding: 8px 0;
  width: 100%; }

textarea {
  overflow: auto;
  resize: vertical; }

input[type=checkbox],
input[type=radio] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
  display: inline; }

input[type=submit],
input[type=reset],
input[type=button],
button {
  background-color: #007bff;
  border: #007bff;
  border-radius: 4px;
  color: #fff;
  padding: 8px 16px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out; }

input[type=submit]::-moz-focus-inner,
input[type=reset]::-moz-focus-inner,
input[type=button]::-moz-focus-inner,
button::-moz-focus-inner {
  padding: 0; }

input[type=submit]:hover,
input[type=reset]:hover,
input[type=button]:hover,
button:hover {
  background-color: #0069d9;
  border-color: #0062cc;
  color: #fff; }

input[type=submit]:not(:disabled):active,
input[type=reset]:not(:disabled):active,
input[type=button]:not(:disabled):active,
button:not(:disabled):active {
  background-color: #0062cc;
  border-color: #005cbf;
  color: #fff; }

input[type=submit]:focus,
input[type=reset]:focus,
input[type=button]:focus,
button:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }

input[type=submit]:disabled,
input[type=reset]:disabled,
input[type=button]:disabled,
button:disabled {
  opacity: .65;
  cursor: not-allowed;
  background-color: #007bff;
  border-color: #007bff;
  color: #fff; }

table {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 16px; }

caption {
  padding: 8px 0; }

thead th {
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
  text-align: left; }

tr {
  margin-bottom: 8px; }

th,
td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 16px;
  vertical-align: inherit; }

tfoot tr {
  text-align: left; }

tfoot td {
  color: rgba(0, 0, 0, 0.54);
  font-size: 8px;
  font-style: italic;
  padding: 16px 4px; }
`