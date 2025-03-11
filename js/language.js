const translations = {
    en: {
        title: "Tanitian Tourism",
        welcome: "Welcome to Taniti – Your Next Island Adventure! 🌴",
        description: "Discover the perfect blend of adventure, relaxation, and culture on the beautiful island of Taniti.",
        accommodations: "Accommodations",
        attractions: "Attractions",
        transportation: "Transportation",
        contact: "Contact",
        planTrip: "Plan Your Trip",
    },
    es: {
        title: "Turismo en Taniti",
        welcome: "¡Bienvenido a Taniti – Tu próxima aventura en la isla! 🌴",
        description: "Descubre la combinación perfecta de aventura, relajación y cultura en la hermosa isla de Taniti.",
        accommodations: "Alojamientos",
        attractions: "Atracciones",
        transportation: "Transporte",
        contact: "Contacto",
        planTrip: "Planifica Tu Viaje",
    },
    fr: {
        title: "Tourisme à Taniti",
        welcome: "Bienvenue à Taniti – Votre prochaine aventure insulaire ! 🌴",
        description: "Découvrez le mélange parfait d'aventure, de détente et de culture sur la magnifique île de Taniti.",
        accommodations: "Hébergements",
        attractions: "Attractions",
        transportation: "Transport",
        contact: "Contact",
        planTrip: "Planifiez Votre Voyage",
    },
    jp: {
        title: "タニティ観光",
        welcome: "タニティへようこそ – 次の島の冒険へ！ 🌴",
        description: "美しいタニティ島で、冒険、リラクゼーション、文化の完璧な組み合わせを発見してください。",
        accommodations: "宿泊施設",
        attractions: "観光名所",
        transportation: "交通手段",
        contact: "お問い合わせ",
        planTrip: "旅行を計画する",
    },
};

// Función para cambiar el idioma en toda la página
function changeLanguage(lang) {
    document.title = translations[lang].title;
    document.querySelector("h2").textContent = translations[lang].welcome;
    document.querySelector("p").textContent = translations[lang].description;
    document.querySelector("a[href='accommodations.html']").textContent = translations[lang].accommodations;
    document.querySelector("a[href='attractions.html']").textContent = translations[lang].attractions;
    document.querySelector("a[href='transportation.html']").textContent = translations[lang].transportation;
    document.querySelector("a[href='contact.html']").textContent = translations[lang].contact;
    document.getElementById("plan-trip").textContent = translations[lang].planTrip;

    // Actualizar ambos selectores de idioma
    document.getElementById("language-header").value = lang;
    document.getElementById("language-footer").value = lang;

    // Guardar preferencia en localStorage
    localStorage.setItem("selectedLanguage", lang);
}

// Evento para detectar cambio en cualquiera de los selectores de idioma
document.getElementById("language-header").addEventListener("change", function () {
    changeLanguage(this.value);
});

document.getElementById("language-footer").addEventListener("change", function () {
    changeLanguage(this.value);
});

// Mantener el idioma seleccionado al recargar la página
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("language-header").value = savedLang;
    document.getElementById("language-footer").value = savedLang;
    changeLanguage(savedLang);
});
