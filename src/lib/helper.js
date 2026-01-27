export const getEmbedUrl = (url) => {
  if (!url) return "";

  // contoh:
  // https://www.youtube.com/watch?v=abc123
  // https://youtu.be/abc123
  // https://www.youtube.com/embed/abc123

  let videoId = "";

  // youtu.be/ID
  if (url.includes("youtu.be")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  }

  // youtube.com/watch?v=ID
  else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1]?.split("&")[0];
  }

  // youtube.com/embed/ID
  else if (url.includes("embed/")) {
    videoId = url.split("embed/")[1]?.split("?")[0];
  }

  if (!videoId) return "";

  return `https://www.youtube.com/embed/${videoId}`;
};

export const getYoutubeThumbnail = (url) => {
  const embed = getEmbedUrl(url);
  if (!embed) return "";

  const id = embed.split("/embed/")[1];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

export  const formatTanggal = (tanggal) => {
  if (!tanggal) return "-";

  return new Date(tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const parseDate = (date) => {
  return new Date(date + "T00:00:00");
};
