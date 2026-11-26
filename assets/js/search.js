document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("searchButton");
  const input = document.getElementById("toolSearch");
  const suggestions = document.getElementById("searchSuggestions");

  const tools = [
    {
      name: "Age Calculator",
      keywords: "age birthday",
      url: "calculators/age-calculator.html",
    },
    {
      name: "BMI Calculator",
      keywords: "bmi weight height",
      url: "calculators/bmi-calculator.html",
    },
    {
      name: "Percentage Calculator",
      keywords: "percentage percent",
      url: "calculators/percentage-calculator.html",
    },
    {
      name: "Loan Calculator",
      keywords: "loan emi interest",
      url: "calculators/loan-calculator.html",
    },
    {
      name: "Scientific Calculator",
      keywords: "scientific sin cos tan",
      url: "calculators/scientific-calculator.html",
    },
    {
      name: "GST VAT Calculator",
      keywords: "gst vat tax",
      url: "calculators/gst-vat-calculator.html",
    },
    {
      name: "Word Counter",
      keywords: "word count",
      url: "text-tools/word-counter.html",
    },
    {
      name: "Case Converter",
      keywords: "uppercase lowercase",
      url: "text-tools/case-converter.html",
    },
    {
      name: "Remove Duplicate Lines",
      keywords: "duplicate lines",
      url: "text-tools/remove-duplicate-lines.html",
    },
    {
      name: "Text Reverser",
      keywords: "reverse text",
      url: "text-tools/text-reverser.html",
    },
    {
      name: "Character Counter",
      keywords: "character count",
      url: "text-tools/character-counter.html",
    },
    {
      name: "Image Compressor",
      keywords: "compress image",
      url: "image-tools/image-compressor.html",
    },
    {
      name: "Image Resizer",
      keywords: "resize image",
      url: "image-tools/image-resizer.html",
    },
    {
      name: "Image Converter",
      keywords: "convert image",
      url: "image-tools/image-converter.html",
    },
    {
      name: "Image Cropper",
      keywords: "crop image",
      url: "image-tools/image-cropper.html",
    },
    {
      name: "PDF Merger",
      keywords: "merge pdf",
      url: "pdf-tools/pdf-merger.html",
    },
    {
      name: "PDF Splitter",
      keywords: "split pdf",
      url: "pdf-tools/pdf-splitter.html",
    },
    {
      name: "PDF Compressor",
      keywords: "compress pdf",
      url: "pdf-tools/pdf-compressor.html",
    },
    {
      name: "JSON Formatter",
      keywords: "json format",
      url: "developer-tools/json-formatter.html",
    },
    {
      name: "HTML Formatter",
      keywords: "html format",
      url: "developer-tools/html-formatter.html",
    },
    {
      name: "Base64 Converter",
      keywords: "base64 encode decode",
      url: "developer-tools/base64-converter.html",
    },
    {
      name: "URL Encoder",
      keywords: "url encode",
      url: "developer-tools/url-encoder.html",
    },
    {
      name: "Nepali Date Converter",
      keywords: "nepali date bs ad",
      url: "nepal-tools/nepali-date-converter.html",
    },
    {
      name: "Gold Calculator",
      keywords: "gold price tola",
      url: "nepal-tools/gold-calculator.html",
    },
  ];

  if (!button || !input || !suggestions) {
    console.error("Search elements are missing from index.html.");
    return;
  }

  function findTools(query) {
    const words = query.toLowerCase().trim().split(/\s+/);

    return tools.filter(function (tool) {
      const searchableText = (tool.name + " " + tool.keywords).toLowerCase();

      return words.every(function (word) {
        return searchableText.includes(word);
      });
    });
  }

  function searchTools() {
    const query = input.value.trim();

    if (!query) {
      alert("Please enter a tool name.");
      input.focus();
      return;
    }

    const found = findTools(query);

    if (found.length > 0) {
      window.location.href = new URL(found[0].url, document.baseURI).href;
    } else {
      alert("No matching tool found. Try another search.");
    }
  }

  function showSuggestions() {
    const query = input.value.trim();

    suggestions.innerHTML = "";

    if (!query) return;

    const matches = findTools(query).slice(0, 6);

    if (matches.length === 0) {
      suggestions.textContent = "No matching tools found.";
      return;
    }

    matches.forEach(function (tool) {
      const item = document.createElement("div");

      item.className = "search-suggestion";
      item.textContent = tool.name;
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");

      function openTool() {
        window.location.href = new URL(tool.url, document.baseURI).href;
      }

      item.addEventListener("click", openTool);

      item.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openTool();
        }
      });

      suggestions.appendChild(item);
    });
  }

  input.addEventListener("input", showSuggestions);
  button.addEventListener("click", searchTools);

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchTools();
    }
  });

  console.log("Nepal Smart Tools search initialized successfully.");
});
