export default class Select {
  constructor(element) {
    this.element = element;
    this.options = formatOriginalOptions(element.querySelectorAll("option"));
    this.customElement = document.createElement("div");
    this.labelElement = document.createElement("div");
    this.labelElementName = document.createElement("span");
    this.labelElementArrow = document.createElement("span");
    this.optionsCustomElementWrapper = document.createElement("div");
    this.optionsCustomElement = document.createElement("ul");
    setupCustomElement(this);
    element.style.display = "none";
    element.after(this.customElement);
  }

  get selectedOption() {
    return this.options.find((option) => option.selected);
  }

  get selectedOptionIndex() {
    return this.options.indexOf(this.selectedOption);
  }

  selectValue(value) {
    const newSelectedOption = this.options.find((option) => {
      return option.value === value;
    });
    const prevSelectedOption = this.selectedOption;
    prevSelectedOption.selected = false;
    prevSelectedOption.element.selected = false;
    newSelectedOption.selected = true;
    newSelectedOption.element.selected = true;

    this.customElement.dataset.value = newSelectedOption.value;
    this.labelElementName.innerText = newSelectedOption.label;

    this.optionsCustomElement
      .querySelector(`[data-value="${prevSelectedOption.value}"]`)
      .classList.remove("selected");
    const newSelectedOptionElement = this.optionsCustomElement.querySelector(
      `[data-value="${newSelectedOption.value}"]`
    );

    newSelectedOptionElement.classList.add("selected");
    newSelectedOptionElement.scrollIntoView({ block: "nearest" });
  }
}

function setupCustomElement(select) {
  select.customElement.classList.add(
    "inline-block",
    "relative",
    "outline-none",
    "group",
    "focus:z-[1]",
    "h-[46px]",
    "min-w-[125px]"
  );
  select.element.classList.forEach((i) => {
    select.customElement.classList.add(i);
  });
  select.customElement.tabIndex = 0;
  select.customElement.id = select.element.dataset.id;

  select.customElement.dataset.value = select.selectedOption.value;

  select.labelElement.classList.add(
    "border-2",
    "border-orange-700",
    "rounded-3xl",
    "w-full",
    "bg-white",
    "flex",
    "items-center",
    "justify-between",
    "cursor-pointer",
    "select-none",
    "group-focus:border-[3px]",
    "overflow-hidden"
  );

  select.labelElementName.classList.add("pl-6", "pr-8");
  select.labelElementName.innerText = select.selectedOption.label;
  select.labelElementArrow.classList.add(
    "material-symbols-rounded",
    "text-3xl",
    "bg-orange-300",
    "border-l-2",
    "border-l-orange-700",
    "w-10",
    "h-10",
    "flex",
    "items-center",
    "justify-center"
  );
  select.labelElementArrow.innerText = "expand_more";

  select.labelElement.append(select.labelElementName, select.labelElementArrow);

  select.customElement.append(select.labelElement);

  select.optionsCustomElementWrapper.classList.add(
    "hidden",
    "absolute",
    "border-[3px]",
    "border-orange-700",
    "w-full",
    "max-h-[300px]",
    "overflow-y-hidden",
    "rounded-3xl",
    "pt-11",
    "top-0",
    "z-[-1]",
    "bg-white"
  );

  select.optionsCustomElement.classList.add("max-h-[230px]", "overflow-y-auto");
  select.options.forEach((option) => {
    const optionElement = document.createElement("li");
    optionElement.classList.add("py-2", "pl-4", "cursor-pointer", "hover:bg-orange-100");
    optionElement.classList.toggle("selected", option.selected);
    optionElement.classList.toggle("hidden", option.hidden);
    optionElement.innerText = option.label;
    optionElement.dataset.value = option.value;
    optionElement.addEventListener("click", () => {
      select.selectValue(option.value);
      select.optionsCustomElementWrapper.classList.remove("select-open");
    });
    select.optionsCustomElement.append(optionElement);
  });
  select.optionsCustomElementWrapper.append(select.optionsCustomElement);
  select.customElement.append(select.optionsCustomElementWrapper);

  select.labelElement.addEventListener("click", () => {
    select.optionsCustomElementWrapper.classList.toggle("select-open");
  });
  select.customElement.addEventListener("blur", () => {
    select.optionsCustomElementWrapper.classList.remove("select-open");
  });

  let debounceTimeout;
  let searchTerm = "";
  select.customElement.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "Space":
        select.optionsCustomElementWrapper.classList.toggle("select-open");
        break;
      case "ArrowUp":
        const prevOption = select.options[select.selectedOptionIndex - 1];
        if (prevOption) {
          select.selectValue(prevOption.value);
        }
        break;
      case "ArrowDown":
        const nextOption = select.options[select.selectedOptionIndex + 1];
        if (nextOption) {
          select.selectValue(nextOption.value);
        }
        break;

      case "Enter":
      case "Escape":
        select.optionsCustomElementWrapper.classList.remove("select-open");
        break;
      default:
        clearTimeout(debounceTimeout);
        searchTerm += e.key;
        debounceTimeout = setTimeout(() => {
          searchTerm = "";
        }, 500);

        const searchedOption = select.options.find((option) => {
          return option.label.toLowerCase().startsWith(searchTerm);
        });
        if (searchedOption) select.selectValue(searchedOption.value);
    }
  });
}

function formatOriginalOptions(optionElements) {
  return [...optionElements].map((optionElement) => {
    return {
      value: optionElement.value,
      label: optionElement.label,
      selected: optionElement.selected,
      hidden: optionElement.hidden,
      element: optionElement,
    };
  });
}
