export const fixLink = (url) => {
    return "https" + url.split("").splice(4).join("");
  };