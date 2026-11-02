const searchInput = document.getElementById("menuSearch");
const searchMessage = document.getElementById("searchMessage");
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");

const escapeHtml = (value) => {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

if (searchInput) {
    const menuItems = document.querySelectorAll(".menu-item");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.trim().toLowerCase();
        let visibleItems = 0;

        menuItems.forEach(function (item) {
            const matches = item.textContent.toLowerCase().includes(searchText);
            item.style.display = matches ? "" : "none";

            if (matches) {
                visibleItems++;
            }
        });

        if (searchMessage) {
            searchMessage.textContent = visibleItems + " menu item(s) found.";
        }
    });
}

if (galleryImages.length > 0 && lightbox && lightboxImage && lightboxCaption) {
    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            const fullImageSrc = image.dataset.full || image.src;
            const altText = image.alt || "Food image";

            lightboxImage.src = fullImageSrc;
            lightboxImage.alt = altText;
            lightboxCaption.textContent = escapeHtml(altText);
            lightbox.classList.add("open");
            lightbox.setAttribute("aria-hidden", "false");
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", function () {
            lightbox.classList.remove("open");
            lightbox.setAttribute("aria-hidden", "true");
        });
    }

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("open");
            lightbox.setAttribute("aria-hidden", "true");
        }
    });
}

const enforceFormSanitization = () => {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            const fields = form.querySelectorAll("input, textarea, select");
            let isValid = true;

            fields.forEach((field) => {
                if (field.required && !field.value.trim()) {
                    isValid = false;
                    field.setAttribute("aria-invalid", "true");
                    field.focus();
                }

                if (field.type === "email") {
                    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
                    if (field.value && !validEmail) {
                        isValid = false;
                        field.setAttribute("aria-invalid", "true");
                    }
                }

                if (field.maxLength && field.value.length > Number(field.maxLength)) {
                    isValid = false;
                    field.setAttribute("aria-invalid", "true");
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("Please correct the highlighted form details and try again.");
            }
        });
    });
};

enforceFormSanitization();
