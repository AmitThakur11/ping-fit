export const fixUrl = (url) => {
    return "https" + url.split("").splice(4).join("");
  };