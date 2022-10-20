/*!
 * Themy (v2.0.0): .pug-lintrc.js
 * Copyright (c) 2020 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */
// https://github.com/pugjs/pug-lint#configuration-file
// https://github.com/pugjs/pug-lint/blob/master/docs/rules.md

module.exports = {
  disallowClassAttributeWithStaticValue: true,
  disallowDuplicateAttributes: true,
  disallowHtmlText: null,
  disallowIdAttributeWithStaticValue: true,
  disallowMultipleLineBreaks: true,
  disallowSpacesInsideAttributeBrackets: true,
  disallowTrailingSpaces: true,
  requireClassLiteralsBeforeAttributes: true,
  requireClassLiteralsBeforeIdLiterals: true,
  requireIdLiteralsBeforeAttributes: true,
  requireLineFeedAtFileEnd: true,
  requireLowerCaseAttributes: true,
  requireLowerCaseTags: true,
  requireSpaceAfterCodeOperator: true,
  requireSpecificAttributes: [{
    form: ["name"],
    img: ["alt"],
    input: ["type"],
    "input[type=submit]": ["value"]
  }],
  requireStrictEqualityOperators: true,
  validateAttributeQuoteMarks: "\"",
  validateAttributeSeparator: {
    separator: " ",
    multiLineSeparator: "\n  "
  },
  validateDivTags: true,
  validateIndentation: 2
};
