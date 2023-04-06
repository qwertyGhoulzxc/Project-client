import  {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  * {
 
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub,
  sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption,
  tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
    vertical-align: baseline;
   
  }
body{
  background-image: url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
  background-repeat: no-repeat;
  background-size: cover;
}
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none;
  }

  mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  del {
    text-decoration: line-through;
  }

  abbr[title], dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  input, select {
    vertical-align: middle;
  }

  button::-moz-focus-inner, input[type="reset"]::-moz-focus-inner, input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner, select::-moz-focus-inner,
  input[type="file"] > input[type="button"]::-moz-focus-inner {
    border: none;
  }

  :focus {
    outline: none;
  }
`