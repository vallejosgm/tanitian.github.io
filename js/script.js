function searchSite(event) {
    if (event) event.preventDefault(); // Evita recargar la página si viene del formulario

    let query = document.getElementById("searchInput").value.trim().toLowerCase();
    let elements = document.querySelectorAll("main section, main, main h2, main p, main li, form button, form label, form input, footer, footer label, foooter h3, footer div, p, button, a, h3");

    let firstMatch = null;

    // 🔴 1️⃣ ELIMINA RESALTADOS ANTERIORES
    document.querySelectorAll(".highlight").forEach(span => {
        let parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize();
    });

    // 🔵 2️⃣ FUNCION PARA RESALTAR TEXTO (VARIAS COINCIDENCIAS)
    function highlightText(node) {
        let text = node.nodeValue;
        let regex = new RegExp(`(${query})`, "gi");

        if (text.toLowerCase().includes(query)) {
            let fragment = document.createDocumentFragment();
            let parts = text.split(regex);

            parts.forEach((part, index) => {
                if (index % 2 === 0) {
                    fragment.appendChild(document.createTextNode(part));
                } else {
                    let span = document.createElement("span");
                    span.className = "highlight";
                    span.textContent = part;
                    fragment.appendChild(span);

                    if (!firstMatch) {
                        firstMatch = span;
                    }
                }
            });

            node.replaceWith(fragment);
        }
    }

    // 🟢 3️⃣ BUSCA Y RESALTA TODAS LAS COINCIDENCIAS
    elements.forEach(el => {
        el.normalize();
        Array.from(el.childNodes).forEach(child => {
            if (child.nodeType === 3) {
                highlightText(child);
            }
        });
    });

    // 🟡 4️⃣ SCROLL AUTOMÁTICO A LA PRIMERA COINCIDENCIA
    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function toggleDetails(id, text, button) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.textContent = "View Less about " + text;
    } else {
        details.style.display = "none";
        button.textContent = "View More about " + text;
    }
}
