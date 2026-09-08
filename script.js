function copyBib() {
  const text = document.getElementById('bib-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.textContent;
    btn.textContent = 'Copied';
    setTimeout(() => { btn.textContent = original; }, 1500);
  });
}
