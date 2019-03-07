export const categories = [
  "address",
  "commerce",
  "company",
  "database",
  "date",
  "finance",
  "hacker",
  "image",
  "internet",
  "lorem",
  "name",
  "phone",
  "random",
  "system"
];

export const schemaTypes = [
  {
    category: "address",
    stub: "zipCode",
    label: "Zip Code",
    type: "numberish"
  },
  { category: "address", stub: "city", label: "City" },
  { category: "address", stub: "cityPrefix", label: "City Prefix" },
  { category: "address", stub: "citySuffix", label: "City Suffix" },
  { category: "address", stub: "streetName", label: "Street Name" },
  { category: "address", stub: "streetAddress", label: "Street Address" },
  { category: "address", stub: "streetSuffix", label: "Street Suffix" },
  { category: "address", stub: "streetPrefix", label: "Street Prefix" },
  { category: "address", stub: "secondaryAddress", label: "Secondary Address" },
  { category: "address", stub: "county", label: "County" },
  { category: "address", stub: "country", label: "Country" },
  {
    category: "address",
    stub: "countryCode",
    label: "Country Code",
    type: "numberish"
  },
  { category: "address", stub: "state", label: "State" },
  { category: "address", stub: "stateAbbr", label: "State Abbreviation" },
  {
    category: "address",
    stub: "latitude",
    label: "Latitude",
    type: "numberish"
  },
  {
    category: "address",
    stub: "longitude",
    label: "Longitude",
    type: "numberish"
  },
  { category: "commerce", stub: "color", label: "Color" },
  { category: "commerce", stub: "department", label: "Department" },
  { category: "commerce", stub: "productName", label: "Product Name" },
  { category: "commerce", stub: "price", label: "Price", type: "currency" },
  {
    category: "commerce",
    stub: "productAdjective",
    label: "Product Adjective"
  },
  { category: "commerce", stub: "productMaterial", label: "Product Material" },
  { category: "commerce", stub: "product", label: "Product" },
  { category: "company", stub: "suffixes", label: "Suffixes" },
  { category: "company", stub: "companyName", label: "Company Name" },
  { category: "company", stub: "companySuffix", label: "Company Suffix" },
  { category: "company", stub: "catchPhrase", label: "Catch Phrase" },
  { category: "company", stub: "bs", label: "B.S." },
  {
    category: "company",
    stub: "catchPhraseAdjective",
    label: "Catch Phrase Adjective"
  },
  {
    category: "company",
    stub: "catchPhraseDescriptor",
    label: "Catch Phrase Descriptor"
  },
  { category: "company", stub: "catchPhraseNoun", label: "Catch Phrase Noun" },
  { category: "company", stub: "bsAdjective", label: "B.S. Adjective" },
  { category: "company", stub: "bsBuzz", label: "B.S. Buzzword" },
  { category: "company", stub: "bsNoun", label: "B.S. Noun" },
  { category: "database", stub: "column", label: "Column" },
  { category: "database", stub: "type", label: "Type" },
  { category: "database", stub: "collation", label: "Collation" },
  { category: "database", stub: "engine", label: "Engine" },
  { category: "date", stub: "past", label: "Past", type: "date" },
  { category: "date", stub: "future", label: "Future", type: "date" },
  { category: "date", stub: "recent", label: "Recent", type: "date" },
  { category: "date", stub: "month", label: "Month" },
  { category: "date", stub: "weekday", label: "Weekday" },
  { category: "finance", stub: "account", label: "Account", type: "numberish" },
  { category: "finance", stub: "accountName", label: "Account Name" },
  { category: "finance", stub: "mask", label: "Mask" },
  { category: "finance", stub: "amount", label: "Account" },
  { category: "finance", stub: "transactionType", label: "Transaction Type" },
  { category: "finance", stub: "currencyCode", label: "Currency Code" },
  { category: "finance", stub: "currencyName", label: "Currency Name" },
  { category: "finance", stub: "currencySymbol", label: "Currency Symbol" },
  {
    category: "finance",
    stub: "bitcoinAddress",
    label: "Bitcoin Address",
    type: "numberish"
  },
  {
    category: "finance",
    stub: "ethereumAddress",
    label: "Ethereum Address",
    type: "numberish"
  },
  { category: "finance", stub: "iban", label: "IBAN", type: "numberish" },
  { category: "finance", stub: "bic", label: "BIC", type: "numberish" },
  { category: "hacker", stub: "abbreviation", label: "Abbreviation" },
  { category: "hacker", stub: "adjective", label: "Adjective" },
  { category: "hacker", stub: "noun", label: "Noun" },
  { category: "hacker", stub: "verb", label: "Verb" },
  { category: "hacker", stub: "ingverb", label: "-ing Verb" },
  { category: "hacker", stub: "phrase", label: "Phrase" },
  { category: "image", stub: "image", label: "Image", type: "image" },
  { category: "image", stub: "avatar", label: "Avatar", type: "image" },
  { category: "image", stub: "imageUrl", label: "Image Url", type: "image" },
  { category: "image", stub: "abstract", label: "Abstract", type: "image" },
  { category: "image", stub: "animals", label: "Animals", type: "image" },
  { category: "image", stub: "business", label: "Business", type: "image" },
  { category: "image", stub: "cats", label: "Cats", type: "image" },
  { category: "image", stub: "city", label: "City", type: "image" },
  { category: "image", stub: "food", label: "Food", type: "image" },
  { category: "image", stub: "nightlife", label: "Nightlife", type: "image" },
  { category: "image", stub: "fashion", label: "Fashion", type: "image" },
  { category: "image", stub: "people", label: "People", type: "image" },
  { category: "image", stub: "nature", label: "Nature", type: "image" },
  { category: "image", stub: "sports", label: "Sports", type: "image" },
  { category: "image", stub: "technics", label: "Technics", type: "image" },
  { category: "image", stub: "transport", label: "Transport", type: "image" },
  { category: "image", stub: "dataUri", label: "Data URI" },
  { category: "internet", stub: "avatar", label: "Avatar" },
  { category: "internet", stub: "email", label: "Email" },
  { category: "internet", stub: "exampleEmail", label: "Example Email" },
  { category: "internet", stub: "userName", label: "User Name" },
  { category: "internet", stub: "protocol", label: "Protocol" },
  { category: "internet", stub: "url", label: "URL" },
  { category: "internet", stub: "domainName", label: "Domain Name" },
  { category: "internet", stub: "domainSuffix", label: "Domain Suffix" },
  { category: "internet", stub: "domainWord", label: "Domain Word" },
  { category: "internet", stub: "ip", label: "IP", type: "numberish" },
  { category: "internet", stub: "ipv6", label: "IPV6", type: "numberish" },
  { category: "internet", stub: "userAgent", label: "User Agent" },
  { category: "internet", stub: "color", label: "Color" },
  { category: "internet", stub: "mac", label: "Mac" },
  { category: "internet", stub: "password", label: "Password" },
  { category: "lorem", stub: "word", label: "Word" },
  { category: "lorem", stub: "words", label: "Words" },
  { category: "lorem", stub: "sentence", label: "Sentence" },
  { category: "lorem", stub: "slug", label: "Slug" },
  { category: "lorem", stub: "sentences", label: "Sentences" },
  { category: "lorem", stub: "paragraph", label: "Paragraph" },
  { category: "lorem", stub: "paragraphs", label: "Paragraphs" },
  { category: "lorem", stub: "text", label: "Text" },
  { category: "lorem", stub: "lines", label: "Lines" },
  { category: "name", stub: "firstName", label: "First Name" },
  { category: "name", stub: "lastName", label: "Last Name" },
  { category: "name", stub: "findName", label: "Full Name" },
  { category: "name", stub: "jobTitle", label: "Job Titile" },
  { category: "name", stub: "prefix", label: "Prefix" },
  { category: "name", stub: "suffix", label: "Suffix" },
  { category: "name", stub: "title", label: "Title" },
  { category: "name", stub: "jobDescriptor", label: "Job Descriptor" },
  { category: "name", stub: "jobArea", label: "Job Area" },
  { category: "name", stub: "jobType", label: "Job Type" },
  {
    category: "phone",
    stub: "phoneNumber",
    label: "Phone Number",
    type: "numberish"
  },
  {
    category: "phone",
    stub: "phoneNumberFormat",
    label: "Phone Number Formatted",
    type: "numberish"
  },
  { category: "phone", stub: "phoneFormats", label: "Phone Formats" },
  { category: "random", stub: "number", label: "Number", type: "number" },
  { category: "random", stub: "float", label: "Float", type: "number" },
  { category: "random", stub: "arrayElement", label: "Array Element" },
  { category: "random", stub: "objectElement", label: "Object Element" },
  { category: "random", stub: "uuid", label: "UUID", type: "numberish" },
  { category: "random", stub: "boolean", label: "Boolean" },
  { category: "random", stub: "word", label: "Word" },
  { category: "random", stub: "words", label: "Words" },
  { category: "random", stub: "image", label: "Image", type: "image" },
  { category: "random", stub: "locale", label: "Locale" },
  { category: "random", stub: "alphaNumeric", label: "Alphanumeric" },
  {
    category: "random",
    stub: "hexaDecimal",
    label: "Hexadecimal",
    type: "numberish"
  },
  { category: "system", stub: "fileName", label: "Filename" },
  { category: "system", stub: "commonFileName", label: "Common Filename" },
  { category: "system", stub: "mimeType", label: "MIME Type" },
  { category: "system", stub: "commonFileType", label: "Common File Type" },
  { category: "system", stub: "commonFileExt", label: "Common File Extension" },
  { category: "system", stub: "fileType", label: "File Type" },
  { category: "system", stub: "fileExt", label: "File Extension" },
  { category: "system", stub: "directoryPath", label: "Directory Path" },
  { category: "system", stub: "filePath", label: "File Path" },
  { category: "system", stub: "semver", label: "Semver", type: "numberish" }
];

export const helpers = [
  {
    label: "Profile",
    stub: "profile",
    elements: [
      { category: "name", stub: "findName", label: "Full Name" },
      { category: "image", stub: "avatar", label: "Avatar", type: "image" },
      { category: "internet", stub: "email", label: "Email" },
      { category: "internet", stub: "userName", label: "User Name" },
      {
        category: "phone",
        stub: "phoneNumberFormat",
        label: "Phone Number Formatted",
        type: "numberish"
      },
      { category: "image", stub: "image", label: "Cover Image", type: "image" }
    ]
  },
  {
    label: "Business",
    stub: "business",
    elements: [
      { category: "company", stub: "companyName", label: "Company Name" },
      { category: "company", stub: "catchPhrase", label: "Catch Phrase" },
      { category: "company", stub: "bs", label: "B.S." },
      {
        category: "phone",
        stub: "phoneNumberFormat",
        label: "Phone Number Formatted",
        type: "numberish"
      },
      { category: "internet", stub: "url", label: "URL" },
      { category: "commerce", stub: "color", label: "Color" }
    ]
  }
];
