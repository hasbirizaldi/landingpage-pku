import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLink,
} from "react-icons/fa6";

const ShareButton = ({ title }) => {
  const currentUrl = window.location.href;

  const shareTo = (platform) => {
    const text = encodeURIComponent(title);
    const url = encodeURIComponent(currentUrl);

    let shareUrl = "";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;

      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;

      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;

      case "instagram":
        navigator.clipboard.writeText(currentUrl);
        alert("Link disalin! Tempelkan di Instagram Story/Bio");
        return;

      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center flex-wrap gap-2 mb-6">
      <button
        onClick={() => shareTo("whatsapp")}
        className="flex cursor-pointer items-center gap-1 h-12 w-12 justify-center text-sm bg-green-500 text-white rounded-full hover:bg-green-600"
      >
        <FaWhatsapp className="text-2xl"/> 
      </button>

      <button
        onClick={() => shareTo("facebook")}
        className="flex cursor-pointer items-center gap-1 h-12 w-12 justify-center text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        <FaFacebookF className="text-xl"/> 
      </button>

      <button
        onClick={() => shareTo("instagram")}
        className="flex cursor-pointer items-center gap-1 h-12 w-12 justify-center text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90"
      >
        <FaInstagram className="text-2xl"/> 
      </button>

      <button
        onClick={() => shareTo("linkedin")}
        className="flex cursor-pointer items-center gap-1 h-12 w-12 justify-center text-sm bg-blue-700 text-white rounded-full hover:bg-blue-800"
      >
        <FaLinkedinIn className="text-xl"/> 
      </button>

      <button
        onClick={() => navigator.clipboard.writeText(currentUrl)}
        className="flex cursor-pointer items-center gap-1 h-10 px-4 text-sm bg-slate-600 text-white rounded-full hover:bg-slate-700"
      >
        <FaLink className="text-2xl"/> Copy Link
      </button>
    </div>
  );
};

export default ShareButton;
