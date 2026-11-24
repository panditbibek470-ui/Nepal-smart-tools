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

  function searchTools() {
    const query = input.value.trim().toLowerCase();

    if (!query) {
      alert("Please enter a tool name.");
      return;
    }

    const found = tools.find(function (tool) {
      return (tool.name + " " + tool.keywords).toLowerCase().includes(query);
    });

    if (found) {
      window.location.href = found.url;
    } else {
      alert("No matching tool found.");
    }
  }

  // Live suggestions while typing
  if (input && suggestions) {
    input.addEventListener("input", function () {
      const query = input.value.trim().toLowerCase();

      suggestions.innerHTML = "";

      if (!query) {
        return;
      }

      const matches = tools.filter(function (tool) {
        return (tool.name + " " + tool.keywords).toLowerCase().includes(query);
      });

      matches.slice(0, 6).forEach(function (tool) {
        const item = document.createElement("div");

        item.className = "search-suggestion";
        item.textContent = tool.name;

        item.addEventListener("click", function () {
          window.location.href = tool.url;
        });

        suggestions.appendChild(item);
      });

      if (matches.length === 0) {
        suggestions.textContent = "No matching tools found.";
      }
    });
  }

  // Search button
  if (button && input) {
    button.addEventListener("click", searchTools);

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        searchTools();
      }
    });
  }
});
