import { createGlobalStyle } from "styled-components"

export const PrismNordTheme = createGlobalStyle`
code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  font-family: "Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre)>code[class*="language-"],
pre[class*="language-"] {
  background: #2E3440;
}

/* Inline code */
:not(pre)>code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #636f88;
}

.token.punctuation {
  color: #81A1C1;
}

.namespace {
  opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #81A1C1;
}

.token.number {
  color: #B48EAD;
}

.token.boolean {
  color: #81A1C1;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #A3BE8C;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #81A1C1;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #88C0D0;
}

.token.keyword {
  color: #81A1C1;
}

.token.regex,
.token.important {
  color: #EBCB8B;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
`
