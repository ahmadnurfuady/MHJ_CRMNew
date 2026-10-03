import { initCheckboxField, initInputField, initSelectField, } from "@/core/data/common";
import { ref } from "vue";
export const type = ref("password");
export function getImages(path) {
    if (!path)
        return "";
    if (path.startsWith("data:image")) {
        return path;
    }
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }
    const base = import.meta.env.BASE_URL;
    return `${base}images/${path.replace(/^\/+/, "")}`;
}
export function formatPrice(price) {
    return `${price.toLocaleString("en-US")}`;
}
export function stars(count) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="fa-solid fa-star text-warning"></i>';
        }
        else {
            stars = stars + '<i class="fa-regular fa-star text-warning"></i>';
        }
    }
    return stars;
}
export function showPassword() {
    if (type.value === "password") {
        type.value = "text";
    }
    else {
        type.value = "password";
    }
}
export function getUserText(userName, value = "") {
    const names = userName.split(" ");
    if (names && names[0] && names[0][0] && value == "singleText") {
        return names[0][0];
    }
    else {
        return names.map((name) => name[0]).join("");
    }
}
export function getTextColor(name) {
    const firstLetter = name[0];
    if (firstLetter)
        if (firstLetter >= "A" && firstLetter <= "E") {
            return "primary";
        }
        else if (firstLetter >= "F" && firstLetter <= "J") {
            return "success";
        }
        else if (firstLetter >= "K" && firstLetter <= "O") {
            return "warning";
        }
        else if (firstLetter >= "P" && firstLetter <= "T") {
            return "danger";
        }
        else {
            return "secondary";
        }
}
export function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export const today = new Date();
export const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
export const last7Days = new Date(today);
last7Days.setDate(today.getDate() - 7);
export const last30Days = new Date(today);
last30Days.setDate(today.getDate() - 30);
export const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
export const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
export const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
export const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
export const formatDecimalOnly = (value, digits = 2) => {
    return Number(value).toFixed(digits);
};
export function columnValue(details, fieldValue, decimal) {
    if (!(fieldValue in details))
        return undefined;
    const key = fieldValue;
    const value = details[key];
    return decimal && value != null ? formatDecimalOnly(value) : value;
}
export const formatNumber = (value) => {
    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(Number(value));
};
export function titleCase(value) {
    return value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
export function resetForm(form) {
    const newForm = { ...form };
    Object.keys(newForm).forEach((key) => {
        const field = newForm[key];
        if ("type" in field) {
            switch (field.type) {
                case "dropdown":
                    newForm[key] = initSelectField();
                    break;
                case "checkbox":
                    newForm[key] = initCheckboxField();
                    break;
                default:
                    newForm[key] = initInputField();
                    break;
            }
        }
        else {
            // fallback: if missing type, default to input
            newForm[key] = initInputField();
        }
    });
    return newForm;
}
export function assignFormFieldValue(form, formValue) {
    const updatedForm = { ...form };
    Object.keys(updatedForm).forEach((key) => {
        const field = updatedForm[key];
        if (!field)
            return;
        const value = formValue[key];
        if ("type" in field) {
            switch (field.type) {
                case "dropdown":
                    updatedForm[key] = {
                        selected: value ?? null,
                        errorMessage: "",
                        type: "dropdown",
                    };
                    break;
                case "checkbox":
                    updatedForm[key] = {
                        data: Boolean(value),
                        errorMessage: "",
                        type: "checkbox",
                    };
                    break;
                default:
                    updatedForm[key] = {
                        ...field,
                        data: value ?? "",
                    };
                    break;
            }
        }
    });
    return updatedForm;
}
export function initializeCheckboxList(list) {
    list.forEach((item) => {
        if (item.checked) {
            item.model.data = true;
        }
    });
}
export function calculateAge(date) {
    const dob = date;
    if (!dob)
        return;
    const birthDate = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    let ageString = "";
    if (years > 0) {
        ageString = `${years} year${years > 1 ? "s" : ""}`;
    }
    else if (months > 0) {
        ageString = `${months} month${months > 1 ? "s" : ""}`;
        if (days > 0)
            ageString += ` and ${days} day${days > 1 ? "s" : ""}`;
    }
    else {
        ageString = `${days} day${days > 1 ? "s" : ""}`;
    }
    return ageString;
}
export function getTableRowId(item) {
    if ("id" in item) {
        const id = item.id;
        if (typeof id === "number")
            return id;
        if (typeof id === "string" && !isNaN(Number(id)))
            return Number(id);
    }
    if ("productId" in item) {
        const pid = item.productId;
        if (typeof pid === "number")
            return pid;
        if (typeof pid === "string" && !isNaN(Number(pid)))
            return Number(pid);
    }
    return -1;
}
export function hasId(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "id" in obj &&
        typeof obj.id === "number");
}
export function isChartValue(value) {
    return (typeof value === "object" &&
        value !== null &&
        "series" in value &&
        "options" in value);
}
