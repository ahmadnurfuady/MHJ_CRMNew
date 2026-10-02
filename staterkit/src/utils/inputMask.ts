import { reactive } from "vue";

export function maskingValue() {
  const maskingForm = reactive({
    formattedDate: "",
    formattedMonthDate: "",
    formattedTime: "",
    formattedHourTime: "",
    currency: "",
    prefixNumber: "",
    delimiterNumber: "",
    phoneNumber: "",
    cardNumber: "",
    tailPrefix: "",
    ipAddress: "",
    multipleDelimiter: "",
    multipleCharacters: "",
  });

  function formatDate(event: Event) {
    const inputDate = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );

    let day = inputDate.slice(0, 2);
    if (+day > 31) {
      day = `0${inputDate.slice(0, 1)}`;
    }

    let month = inputDate.slice(2, 4);
    if (+month > 12) {
      month = `0${inputDate.slice(2, 3)}`;
    }

    const year = inputDate.slice(4, 8);

    let formatted = "";
    if (inputDate.length > 0) formatted += `${day}`;
    if (inputDate.length > 2) formatted += "-" + `${month}`;
    if (inputDate.length > 4) formatted += "-" + `${year}`;
    maskingForm.formattedDate = formatted;
  }

  function formatMonthDate(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );
    let month = input.slice(0, 2);
    const year = input.slice(2, 6);

    // Don’t auto-correct months when user is still typing
    if (month.length === 2) {
      const monthNum = parseInt(month, 10);
      if (monthNum < 1 || monthNum > 12) {
        month = "12"; // Or leave as-is and validate later
      }
    }

    let formatted = "";
    if (input.length <= 2) {
      formatted = month;
    } else {
      formatted = `${month}/${year}`;
    }

    maskingForm.formattedMonthDate = formatted;
  }

  function formatTime(event: Event) {
    const inputTime = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );

    let hours = inputTime.slice(0, 2);
    if (+hours > 23) {
      hours = `0${inputTime.slice(0, 1)}`;
    }

    let minutes = inputTime.slice(2, 4);
    if (+minutes > 59) {
      minutes = `0${inputTime.slice(2, 3)}`;
    }

    let seconds = inputTime.slice(4, 6);
    if (+seconds > 59) {
      seconds = `0${inputTime.slice(4, 5)}`;
    }

    let formatted = "";
    if (inputTime.length > 0) formatted += `${hours}`;
    if (inputTime.length > 2) formatted += ":" + `${minutes}`;
    if (inputTime.length > 4) formatted += ":" + `${seconds}`;
    maskingForm.formattedTime = formatted;
  }

  function formatHourTime(event: Event) {
    const inputTime = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );
    let minutes = inputTime.slice(0, 2);
    if (+minutes > 59) {
      minutes = `0${inputTime.slice(0, 1)}`;
    }

    let seconds = inputTime.slice(2, 4);
    if (+seconds > 59) {
      seconds = `0${inputTime.slice(2, 3)}`;
    }

    let formatted = "";
    if (inputTime.length <= 2) {
      formatted = minutes;
    } else {
      formatted = `${minutes}:${seconds}`;
    }
    maskingForm.formattedHourTime = formatted;
  }

  function formatCurrency(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );

    const numberValue = parseFloat(input) / 100;

    // Format as currency
    const formatted = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(numberValue);

    maskingForm.currency = formatted;
  }

  function formatPrefix(event: Event) {
    let input = (event.target as HTMLInputElement).value.replace(/[^0-9]/g, "");
    const maxLength = 0;

    if (maxLength > 0) {
      input = input.slice(0, maxLength);
    }

    let formattedPrefix = "";

    if (input.length > 0) {
      const grouped = input.match(/.{1,4}/g)?.join("-") || "";
      formattedPrefix = `PREFIX-${grouped}`;
    }

    maskingForm.prefixNumber = formattedPrefix;
  }

  function formatDelimiter(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );
    let formattedInput = "";

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formattedInput += "·";
      }
      formattedInput += input[i];
    }

    maskingForm.delimiterNumber = formattedInput;
  }

  function formatPhoneNumber(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );

    let formattedPhoneNumber = "";

    if (input.length > 0) {
      formattedPhoneNumber += "(" + input.substring(0, 3);
    }
    if (input.length >= 4) {
      formattedPhoneNumber += ") " + input.substring(3, 6);
    }
    if (input.length >= 7) {
      formattedPhoneNumber += "-" + input.substring(6, 10);
    }

    maskingForm.phoneNumber = formattedPhoneNumber;
  }

  function formatCardNumber(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );
    let formattedCardNumber = "";

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedCardNumber += " ";
      }
      formattedCardNumber += input[i];
    }

    maskingForm.cardNumber = formattedCardNumber;
  }

  function formatTailPrefix(event: Event) {
    let input = (event.target as HTMLInputElement).value.replace(/[^0-9]/g, "");

    const dotIndex = input.indexOf(".");
    if (dotIndex !== -1) {
      input =
        input.substring(0, dotIndex + 1) +
        input.substring(dotIndex + 1).replace(".", "");
    }

    const parts = input.split(".");
    if (parts[1]) {
      parts[1] = parts[1].substring(0, 2);
    }

    input = parts.join(".");

    if (input.length > 0) {
      input = input + "€";
    }

    maskingForm.tailPrefix = input;
  }

  function formatIpAddress(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );

    let formattedValue = "";
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
      if (counter === 3 || counter === 6 || counter === 8) {
        formattedValue += ".";
      }
      formattedValue += input[i];
      counter++;
    }

    maskingForm.ipAddress = formattedValue;
  }

  function formatMultipleDelimiter(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );

    let formattedValue = "";

    for (let i = 0; i < input.length; i++) {
      if (i === 3 || i === 6) {
        formattedValue += ".";
      }
      if (i === 9) {
        formattedValue += "-";
      }
      formattedValue += input[i];
    }

    maskingForm.multipleDelimiter = formattedValue;
  }

  function formatMultipleCharacters(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace(
      /[^0-9]/g,
      "",
    );

    let formattedValue = "";

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formattedValue += " | ";
      }
      formattedValue += input[i];
    }

    maskingForm.multipleCharacters = formattedValue;
  }

  return {
    maskingForm,

    formatDate,
    formatMonthDate,
    formatTime,
    formatHourTime,
    formatCurrency,
    formatPrefix,
    formatDelimiter,
    formatPhoneNumber,
    formatCardNumber,
    formatTailPrefix,
    formatIpAddress,
    formatMultipleDelimiter,
    formatMultipleCharacters,
  };
}
