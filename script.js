const products = [
  {
    id: 1,
    name: "Led Bar",
    price: 26.99,
    cat: "accessories",
    desc: "Bright, clean LED lighting for a sharper front-end look.",
    img: "images/surron-light.png",
    badge: "POPULAR",
    soldOut: false,
    variants: [
      {
        label: "Finish",
        options: [
          { name: "Black", price: 26.99 }
        ]
      }
    ]
  },

  {
    id: 2,
    name: "CNC Throttle",
    price: 52.99,
    cat: "controls",
    desc: "Precision-machined throttle with a premium, race-inspired feel.",
    img: "images/cnc-throttle.png",
    badge: "BEST SELLER",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Chrome", price: 52.99 },
          { name: "Black", price: 52.99 },
          { name: "Blue", price: 52.99 },
          { name: "Purple", price: 52.99 },
          { name: "Red", price: 52.99 },
          { name: "Gold", price: 52.99 }
        ]
      }
    ]
  },

  {
    id: 3,
    name: "ODI Grips",
    price: 20.99,
    cat: "controls",
    desc: "Comfortable lock-on style grips for confident riding.",
    img: "images/odi-grips.png",
    badge: "",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Black", price: 20.99 },
          { name: "Grey", price: 20.99 },
          { name: "Red", price: 20.99 }
        ]
      }
    ]
  },

  {
    id: 4,
    name: "ODI Style Front Plate",
    price: 19.99,
    cat: "style",
    desc: "Race-inspired front plate for a cleaner, more aggressive look.",
    img: "images/front-plate.png",
    badge: "NEW",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Black", price: 19.99 }
        ]
      }
    ]
  },

  {
    id: 5,
    name: "CNC Foot Pegs",
    price: 55.99,
    cat: "style",
    desc: "Strong CNC aluminium pegs with a secure riding platform.",
    img: "images/foot-pegs.png",
    badge: "",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Black", price: 55.99 },
          { name: "Silver", price: 55.99 },
          { name: "Red", price: 55.99 },
          { name: "Gold", price: 55.99 },
          { name: "Blue", price: 55.99 }
        ]
      }
    ]
  },

  {
    id: 6,
    name: "Performance Seat",
    price: 59.99,
    cat: "comfort",
    desc: "Comfort-focused seat for longer sessions and cleaner style.",
    img: "images/seat.png",
    badge: "",
    soldOut: true,
    variants: [
      {
        label: "Cover",
        options: [
          { name: "Black", price: 59.99 }
        ]
      }
    ]
  },

  {
    id: 7,
    name: "eggRider Display",
    price: 44.99,
    cat: "display",
    desc: "Compact display for a clean cockpit and easy ride data.",
    img: "images/eggrider-display.png",
    badge: "NEW",
    soldOut: false,
    variants: [
      {
        label: "Version",
        options: [
          { name: "SM Plug (E-Kit)", price: 44.99 },
          { name: "WP Plug", price: 44.99 }
        ]
      }
    ]
  },

  {
    id: 8,
    name: "CNC MTB Stem",
    price: 27.99,
    cat: "controls",
    desc: "CNC MTB-style stem to finish a clean, tight cockpit setup.",
    img: "images/cnc-mtb-stem.png",
    badge: "",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Black", price: 27.99 },
          { name: "Silver", price: 27.99 },
          { name: "Red", price: 27.99 },
          { name: "Purple", price: 27.99 },
          { name: "Colorful", price: 27.99 },
          { name: "Orange", price: 27.99 }
        ]
      },
      {
        label: "Length",
        options: [
          { name: "35mm", price: 0 },
          { name: "50mm", price: 0 }
        ]
      }
    ]
  },

  {
    id: 9,
    name: "250W Sticker",
    price: 4.99,
    cat: "accessories",
    desc: "Minimal 250W sticker for an OEM-inspired finish.",
    img: "images/250w-sticker.png",
    badge: "",
    soldOut: false,

    variants: [
      {
        label: "Amount",
        options: [
          { name: "2x", price: 3.99 },
          { name: "4x", price: 4.99 },
          { name: "6x", price: 6.99 }
        ]
      }
    ]
  }
];

const reviews = [
  [
    "Looks insane on my build. The CNC throttle feels quality.",
    "Luca M."
  ],
  [
    "Fast shipping and the parts arrived exactly as shown.",
    "Noah K."
  ],
  [
    "The grips completely changed the cockpit. Love the finish.",
    "Mika S."
  ],
  [
    "Clean products, clean website, and great fit on my bike.",
    "Jonas R."
  ],
  [
    "The front plate was the missing detail on my build.",
    "Elias T."
  ]
];

let cart = JSON.parse(localStorage.getItem("torqCart") || "[]");

let activeCat = "all";
let search = "";
let selectedProduct = null;
let selectedOptions = [];

const $ = id => document.getElementById(id);

const euro = number =>
  "€" + Number(number).toFixed(2);function render() {
  const list = products.filter(p =>
    (activeCat === "all" || p.cat === activeCat) &&
    (p.name + " " + p.desc)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  $("grid").innerHTML = list.map(p => `
    <article
      class="product ${p.soldOut ? "sold-out" : ""}"
      onclick="openProduct(${p.id})"
    >
      <div class="product-image">
        ${
          p.badge
            ? `<span class="badge">${p.badge}</span>`
            : ""
        }

        <img
          src="${p.img}"
          alt="${p.name}"
          onerror="this.style.display='none'"
        >
      </div>

      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>

        <div class="row">
          <span class="price">${euro(p.price)}</span>

          <button
            class="add ${p.soldOut ? "sold" : ""}"
            onclick="
              event.stopPropagation();
              ${p.soldOut ? "" : `add(${p.id})`}
            "
          >
            ${p.soldOut ? "SOLD OUT" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </article>
  `).join("");

  $("noResults").style.display =
    list.length ? "none" : "block";
}


function save() {
  localStorage.setItem(
    "torqCart",
    JSON.stringify(cart)
  );
}


function add(
  id,
  variant = "Default",
  price = null
) {
  const p = products.find(x => x.id === id);

  if (!p || p.soldOut) {
    return toast("This product is sold out");
  }

  const finalPrice =
    price !== null
      ? Number(price)
      : Number(p.price);

  const key =
    id + "|" + variant;

  const existing =
    cart.find(i => i.key === key);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      key: key,
      id: id,
      qty: 1,
      variant: variant,
      price: finalPrice
    });
  }

  save();
  renderCart();

  toast("Added to cart");
}


function qty(key, difference) {
  const item =
    cart.find(i => i.key === key);

  if (!item) return;

  item.qty += difference;

  if (item.qty < 1) {
    cart = cart.filter(
      i => i.key !== key
    );
  }

  save();
  renderCart();
}


function removeItem(key) {
  cart = cart.filter(
    i => i.key !== key
  );

  save();
  renderCart();
}


function renderCart() {

  $("cartCount").textContent =
    cart.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );

  $("cartItems").innerHTML =
    cart.length
      ? cart.map(item => {

          const p =
            products.find(
              product =>
                product.id === item.id
            );

          const itemPrice =
            Number(
              item.price ?? p.price
            );

          return `
            <div class="cart-item">

              <div>

                <h4>
                  ${p.name}
                </h4>

                <p>
                  ${item.variant}
                  ·
                  ${euro(itemPrice)}
                  each
                </p>

                <div class="controls">

                  <button
                    class="qty"
                    onclick="
                      qty('${item.key}', -1)
                    "
                  >
                    −
                  </button>

                  <span>
                    ${item.qty}
                  </span>

                  <button
                    class="qty"
                    onclick="
                      qty('${item.key}', 1)
                    "
                  >
                    +
                  </button>

                  <button
                    class="remove"
                    onclick="
                      removeItem('${item.key}')
                    "
                  >
                    Remove
                  </button>

                </div>

              </div>

              <span class="item-total">
                ${euro(
                  itemPrice *
                  item.qty
                )}
              </span>

            </div>
          `;

        }).join("")

      : `
        <div class="empty">
          Your cart is empty.
          <br>
          <br>
          Add some Torq parts
          to get started.
        </div>
      `;


  const total =
    cart.reduce(
      (sum, item) => {

        const p =
          products.find(
            product =>
              product.id === item.id
          );

        const itemPrice =
          Number(
            item.price ?? p.price
          );

        return (
          sum +
          itemPrice *
          item.qty
        );

      },
      0
    );


  $("total").textContent =
    euro(total);
}


function openCart() {
  $("drawer")
    .classList
    .add("open");

  $("overlay")
    .classList
    .add("show");
}


function closeCart() {
  $("drawer")
    .classList
    .remove("open");

  $("overlay")
    .classList
    .remove("show");
}


function calculateVariantPrice() {

  if (!selectedProduct) {
    return 0;
  }

  if (
    !selectedOptions ||
    selectedOptions.length === 0
  ) {
    return Number(
      selectedProduct.price
    );
  }


  /*
    Bei einer Variante mit eigenem Preis
    wird dieser Preis verwendet.

    Beispiel:

    2x = 4.99
    4x = 8.99
    6x = 11.99
  */

  let price =
    Number(
      selectedOptions[0]?.price ??
      selectedProduct.price
    );


  /*
    Bei weiteren Varianten
    können Aufpreise verwendet werden.
  */

  for (
    let i = 1;
    i < selectedOptions.length;
    i++
  ) {

    price += Number(
      selectedOptions[i]?.price || 0
    );

  }


  return price;
}


function updateProductVariant() {

  if (!selectedProduct) {
    return;
  }


  const price =
    calculateVariantPrice();


  $("modalPrice").textContent =
    euro(price);


  /*
    Falls eine ausgewählte Variante
    ein eigenes Bild besitzt,
    wird dieses Bild angezeigt.
  */

  const imageOption =
    selectedOptions.find(
      option =>
        option &&
        option.image
    );


  $("modalImage").src =
    imageOption &&
    imageOption.image
      ? imageOption.image
      : selectedProduct.img;


  if (selectedProduct.soldOut) {

    $("modalAdd").textContent =
      "SOLD OUT";

    $("modalAdd").className =
      "modal-add sold";

    $("modalAdd").disabled =
      true;

  } else {

    $("modalAdd").textContent =
      "ADD TO CART";

    $("modalAdd").className =
      "modal-add";

    $("modalAdd").disabled =
      false;
  }
}function openProduct(id) {

  selectedProduct =
    products.find(p => p.id === id);

  const p = selectedProduct;

  if (!p) return;


  /*
    Standardmäßig wird jeweils
    die erste Variante ausgewählt.
  */

  selectedOptions =
    (p.variants || []).map(
      variant => variant.options[0]
    );


  $("modalImage").src =
    p.img;

  $("modalImage").alt =
    p.name;


  $("modalBadge").textContent =
    p.badge;

  $("modalBadge").style.display =
    p.badge ? "block" : "none";


  $("modalCategory").textContent =
    p.cat.toUpperCase();


  $("modalName").textContent =
    p.name;


  $("modalDescription").textContent =
    p.desc;


  /*
    Varianten erstellen
  */

  $("variantArea").innerHTML =
    "";


  if (p.variants) {

    p.variants.forEach(
      (variant, groupIndex) => {

        const group =
          document.createElement(
            "div"
          );

        group.className =
          "variant-group";


        const label =
          document.createElement(
            "label"
          );

        label.textContent =
          variant.label;


        const options =
          document.createElement(
            "div"
          );

        options.className =
          "variant-options";


        variant.options.forEach(
          (option, optionIndex) => {

            const button =
              document.createElement(
                "button"
              );

            button.type =
              "button";

            button.className =
              "variant";


            /*
              GANZ WICHTIG:

              option ist ein Objekt:

              {
                name: "2x",
                price: 4.99
              }

              Deshalb müssen wir
              option.name anzeigen.

              Dadurch verschwindet
              [object Object].
            */

            button.textContent =
              option.name;


            button.dataset.group =
              groupIndex;

            button.dataset.value =
              option.name;


            if (optionIndex === 0) {

              button.classList.add(
                "selected"
              );

            }


            button.onclick =
              () => {

                /*
                  Alle anderen Buttons
                  dieser Gruppe abwählen
                */

                options
                  .querySelectorAll(
                    ".variant"
                  )
                  .forEach(btn => {

                    btn.classList.remove(
                      "selected"
                    );

                  });


                /*
                  Aktuellen Button auswählen
                */

                button.classList.add(
                  "selected"
                );


                /*
                  Auswahl speichern
                */

                selectedOptions[
                  groupIndex
                ] = option;


                /*
                  Preis und Bild
                  aktualisieren
                */

                updateProductVariant();

              };


            options.appendChild(
              button
            );

          }
        );


        group.appendChild(
          label
        );

        group.appendChild(
          options
        );


        $("variantArea")
          .appendChild(group);

      }
    );

  }


  /*
    Startpreis anzeigen
  */

  updateProductVariant();


  /*
    Add-to-cart Button
  */

  $("modalAdd").onclick =
    () => {

      if (p.soldOut) {
        return;
      }


      const variant =
        selectedOptions.length
          ? selectedOptions
              .map(
                option =>
                  option.name
              )
              .join(" / ")
          : "Default";


      const price =
        calculateVariantPrice();


      add(
        p.id,
        variant,
        price
      );


      closeModal(
        "productModal"
      );

    };


  $("productModal")
    .classList
    .add("show");
}


function closeModal(id) {

  $(id)
    .classList
    .remove("show");

}


function toast(message) {

  const element =
    $("toast");

  element.textContent =
    message;

  element.classList.add(
    "show"
  );


  setTimeout(
    () =>
      element.classList.remove(
        "show"
      ),
    1600
  );
}


function orderText() {

  const lines =
    cart.map(item => {

      const p =
        products.find(
          product =>
            product.id === item.id
        );


      const itemPrice =
        Number(
          item.price ?? p.price
        );


      return `
• ${p.name} x${item.qty} — ${item.variant} — ${euro(
        itemPrice * item.qty
      )}`;

    });


  const total =
    cart.reduce(
      (sum, item) => {

        const p =
          products.find(
            product =>
              product.id === item.id
          );


        const itemPrice =
          Number(
            item.price ?? p.price
          );


        return (
          sum +
          itemPrice *
          item.qty
        );

      },
      0
    );


  return `Hi TorqEbikes! I would like to order:

${lines.join("\n")}

Subtotal: ${euro(total)}
Shipping calculated at checkout.

Name:
Address:
`;
}


function renderReviews() {

  const track =
    $("reviewTrack");


  const allReviews =
    [
      ...reviews,
      ...reviews
    ];


  track.innerHTML =
    allReviews
      .map(review => `

        <article class="review-card">

          <div class="stars">
            ★★★★★
          </div>

          <p>
            “${review[0]}”
          </p>

          <b>
            ${review[1]}
          </b>

          <span>
            Verified rider
          </span>

        </article>

      `)
      .join("");
}


function renderAccount() {

  const account =
    JSON.parse(
      localStorage.getItem(
        "torqAccount"
      ) || "null"
    );


  if (account) {

    $("accountTitle")
      .textContent =
      "WELCOME BACK, " +
      account.name
        .split(" ")[0]
        .toUpperCase();


    $("accountForm")
      .style.display =
      "none";


    $("accountSaved")
      .innerHTML = `

        <p>
          Account saved on this device.
        </p>

        <p>
          ${account.email}
        </p>

        <button
          class="small-btn"
          onclick="
            localStorage.removeItem(
              'torqAccount'
            );
            location.reload();
          "
        >
          SIGN OUT
        </button>

      `;

  } else {

    $("accountTitle")
      .textContent =
      "CREATE YOUR ACCOUNT";


    $("accountForm")
      .style.display =
      "block";


    $("accountSaved")
      .innerHTML =
      "";

  }
}


/*
  CART
*/

$("openCart").onclick =
  openCart;


$("closeCart").onclick =
  closeCart;


$("overlay").onclick =
  closeCart;


/*
  ACCOUNT
*/

$("openAccount").onclick =
  () => {

    $("accountModal")
      .classList
      .add("show");

    renderAccount();

  };


/*
  MODAL CLOSE BUTTONS
*/

document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(button => {

    button.onclick =
      () =>
        closeModal(
          button.dataset.close
        );

  });


/*
  Modal schließen,
  wenn man außerhalb klickt
*/

document
  .querySelectorAll(
    ".modal"
  )
  .forEach(modal => {

    modal.addEventListener(
      "click",
      event => {

        if (
          event.target === modal
        ) {

          closeModal(
            modal.id
          );

        }

      }
    );

  });


/*
  SEARCH
*/

$("search").oninput =
  event => {

    search =
      event.target.value;

    render();

  };


/*
  FILTER
*/

document
  .querySelectorAll(
    ".filter"
  )
  .forEach(button => {

    button.onclick =
      () => {

        document
          .querySelectorAll(
            ".filter"
          )
          .forEach(
            filter =>
              filter.classList
                .remove(
                  "active"
                )
          );


        button.classList.add(
          "active"
        );


        activeCat =
          button.dataset.cat;


        render();

      };

  });


/*
  WHATSAPP
*/

$("whatsapp").onclick =
  () => {

    if (!cart.length) {

      return toast(
        "Your cart is empty"
      );

    }


    /*
      HIER DEINE ECHTE
      WhatsApp Nummer eintragen.
      
      Beispiel:
      4917612345678
    */

    const number =
      "491234567890";


    window.open(
      "https://wa.me/" +
      number +
      "?text=" +
      encodeURIComponent(
        orderText()
      ),
      "_blank"
    );

  };


/*
  EMAIL
*/

$("email").onclick =
  () => {

    if (!cart.length) {

      return toast(
        "Your cart is empty"
      );

    }


    location.href =
      "mailto:orders@torqebikes.com" +
      "?subject=" +
      encodeURIComponent(
        "TorqEbikes Order Request"
      ) +
      "&body=" +
      encodeURIComponent(
        orderText()
      );

  };


/*
  ACCOUNT ERSTELLEN
*/

$("accountForm").onsubmit =
  event => {

    event.preventDefault();


    localStorage.setItem(
      "torqAccount",
      JSON.stringify({

        name:
          $("accountName").value,

        email:
          $("accountEmail").value

      })
    );


    renderAccount();


    toast(
      "Account created"
    );

  };


/*
  WEBSITE STARTEN
*/

render();

renderCart();

renderReviews();