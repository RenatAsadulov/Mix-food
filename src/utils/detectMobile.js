function detectMobile() {
  if (navigator.userAgentData && "mobile" in navigator.userAgentData) {
    return navigator.userAgentData.mobile;
  }
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export { detectMobile };
