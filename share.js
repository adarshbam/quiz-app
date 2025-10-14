import { score, total, percent } from "./result.js";

const shareText = `I scored ${score}/${total} (${percent}%) on Quiz Time! 🧠 Try to beat my score!`;

// element to convert to image (your pie or result wrapper)
const resultElement =
  document.querySelector(".result-wrapper") || document.body; // adjust selector
// ---------- HELPERS ----------
function openTwitterIntent(text) {
  const url =
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
  window.open(url, "_blank", "noopener,noreferrer,width=600,height=420");
}
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard");
    return true;
  } catch (e) {
    console.warn("Clipboard failed", e);
    return false;
  }
}
function showToast(msg = "Done") {
  // implement toast or simple alert
  alert(msg);
}

// generate image blob from DOM element using html2canvas
async function domToBlob(el, scale = 2) {
  // html2canvas options: use scale for better resolution
  const canvas = await html2canvas(el, {
    backgroundColor: null,
    scale,
    useCORS: true,
  });
  return await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

// attempt to share image + text using Web Share API (files)
async function tryShareImageAndText(blob, text) {
  if (!navigator.canShare || !navigator.share) return false;
  const filesArray = [new File([blob], "quiz-result.png", { type: blob.type })];
  if (!navigator.canShare({ files: filesArray })) return false;
  try {
    await navigator.share({ files: filesArray, text, title: "My Quiz Result" });
    return true;
  } catch (err) {
    console.warn("share failed", err);
    return false;
  }
}

// fallback: download image
function downloadBlob(blob, filename = "quiz-result.png") {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ---------- EVENT HANDLERS ----------
document.getElementById("share-twitter").addEventListener("click", () => {
  // Twitter intent with text (works everywhere)
  openTwitterIntent(shareText);
});

document
  .getElementById("share-linkedin")
  .addEventListener("click", async () => {
    // LinkedIn does not accept text-only shares well. We'll try:
    // 1) try Web Share with image (mobile)
    // 2) fallback: copy text to clipboard + toast
    try {
      const blob = await domToBlob(resultElement);
      const ok = await tryShareImageAndText(blob, shareText);
      if (!ok) {
        await copyToClipboard(shareText);
      }
    } catch (e) {
      await copyToClipboard(shareText);
    }
  });

document
  .getElementById("share-instagram")
  .addEventListener("click", async () => {
    // Instagram best experience: share image via native share (mobile)
    // If not available, fall back to download + copy caption
    try {
      const blob = await domToBlob(resultElement);
      const ok = await tryShareImageAndText(blob, shareText);
      if (!ok) {
        // offer download so user can upload manually to Instagram
        downloadBlob(blob, "quiz-result.png");
        await copyToClipboard(shareText);
        showToast(
          "Image downloaded + caption copied. Open Instagram and paste caption."
        );
      }
    } catch (err) {
      // final fallback
      await copyToClipboard(shareText);
      showToast(
        "Caption copied to clipboard. Download the image to post on Instagram."
      );
    }
  });
