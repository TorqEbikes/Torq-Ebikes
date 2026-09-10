const products = [
  {
    id: 1,
    name: "Led Bar",
    price: 26.99,
    cat: "ebike-kits",
    desc: "Bright, clean LED lighting for a sharper front-end look.",
    img: "images/led-bar.png",
    badge: "POPULAR",
    soldOut: false,
    variants: [
      {
        label: "Finish",
        options: [
          { name: "Black", price: 26.99, image: "images/led-bar-black.png" }
        ]
      }
    ]
  },

  {
    id: 2,
    name: "CNC Throttle",
    price: 52.99,
    cat: "ebike-kits",
    desc: "Precision-machined throttle with a premium, race-inspired feel.",
    img: "images/cnc-throttle.png",
    badge: "BEST SELLER",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Chrome", price: 52.99, image: "images/cnc-throttle-chrome.png" },
          { name: "Black", price: 52.99, image: "images/cnc-throttle-black.png" },
          { name: "Blue", price: 52.99, image: "images/cnc-throttle-blue.png" },
          { name: "Purple", price: 52.99, image: "images/cnc-throttle-purple.png" },
          { name: "Red", price: 52.99, image: "images/cnc-throttle-red.png" },
          { name: "Gold", price: 52.99, image: "images/cnc-throttle-gold.png" }
        ]
      }
    ]
  },

  {
    id: 3,
    name: "ODI Grips",
    price: 20.99,
    cat: "ebike-kits",
    desc: "Comfortable lock-on style grips for confident riding.",
    img: "images/odi-grips.png",
    badge: "",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Black", price: 20.99, image: "images/odi-grips-black.png" },
          { name: "Grey", price: 20.99, image: "images/odi-grips-grey.png" },
          { name: "Red", price: 20.99, image: "images/odi-grips-red.png" }
        ]
      }
    ]
  },

  {
    id: 4,
    name: "ODI Style Front Plate",
    price: 19.99,
    cat: "ebike-kits",
    desc: "Race-inspired front plate for a cleaner, more aggressive look.",
    img: "images/front-plate.png",
    badge: "NEW",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Black", price: 19.99, image: "images/front-plate-black.png" }
        ]
      }
    ]
  },

  {
    id: 5,
    name: "CNC Foot Pegs",
    price: 55.99,
    cat: "ebike-kits",
    desc: "Strong CNC aluminium pegs with a secure riding platform.",
    img: "images/foot-pegs.png",
    badge: "",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Black", price: 55.99, image: "images/foot-pegs-black.png" },
          { name: "Silver", price: 55.99, image: "images/foot-pegs-silver.png" },
          { name: "Red", price: 55.99, image: "images/foot-pegs-red.png" },
          { name: "Gold", price: 55.99, image: "images/foot-pegs-gold.png" },
          { name: "Blue", price: 55.99, image: "images/foot-pegs-blue.png" }
        ]
      }
    ]
  },

  {
    id: 6,
    name: "Performance Seat",
    price: 59.99,
    cat: "ebike-kits",
    desc: "Comfort-focused seat for longer sessions and cleaner style.",
    img: "images/seat.png",
    badge: "",
    soldOut: true,
    variants: [
      {
        label: "Cover",
        options: [
          { name: "Black", price: 59.99, image: "images/seat-black.png" }
        ]
      }
    ]
  },

  {
    id: 7,
    name: "eggRider Display",
    price: 44.99,
    cat: ["ebike-kits", "mini-ebikes"],
    desc: "Compact display for a clean cockpit and easy ride data.",
    img: "images/eggrider-display.png",
    badge: "NEW",
    soldOut: false,
    variants: [
      {
        label: "Version",
        options: [
          { name: "SM Plug (E-Kit)", price: 44.99, image: "images/eggrider-sm-plug.png" },
          { name: "WP Plug (Yozma)", price: 44.99, image: "images/eggrider-wp-plug.png" }
        ]
      }
    ]
  },

  {
    id: 8,
    name: "CNC MTB Stem",
    price: 27.99,
    cat: "ebike-kits",
    desc: "CNC MTB-style stem to finish a clean, tight cockpit setup.",
    img: "images/cnc-mtb-stem.png",
    badge: "",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Black", price: 27.99, image: "images/cnc-mtb-stem-black.png" },
          { name: "Silver", price: 27.99, image: "images/cnc-mtb-stem-silver.png" },
          { name: "Red", price: 27.99, image: "images/cnc-mtb-stem-red.png" },
          { name: "Purple", price: 27.99, image: "images/cnc-mtb-stem-purple.png" },
          { name: "Colorful", price: 27.99, image: "images/cnc-mtb-stem-colorful.png" },
          { name: "Orange", price: 27.99, image: "images/cnc-mtb-stem-orange.png" }
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
    cat: "ebike-kits",
    desc: "Minimal 250W sticker for an OEM-inspired finish.",
    img: "images/250w-sticker.png",
    badge: "",
    soldOut: false,
    variants: [
      {
        label: "Amount",
        options: [
          { name: "2x", price: 3.99, image: "images/250w-sticker-2x.png" },
          { name: "4x", price: 4.99, image: "images/250w-sticker-4x.png" },
          { name: "6x", price: 6.99, image: "images/250w-sticker-6x.png" }
        ]
      }
    ]
  },

  {
    id: 10,
    name: "Titanium Foot Pegs",
    price: 64.99,
    cat: "mini-ebikes",
    desc: "CNC-style foot pegs for a clean and secure Mini E Moto setup.",
    img: "images/foot-pegs-mini.png",
    badge: "NEW",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Silver", price: 64.99, image: "images/foot-pegs-mini-silver.png" },
          { name: "Black", price: 64.99, image: "images/foot-pegs-mini-black.png" }
        ]
      }
    ]
  },

  {
    id: 11,
    name: "Yozma CNC Motor Cover",
    price: 37.99,
    cat: "mini-ebikes",
    desc: "CNC motor cover for a clean and upgraded Mini E Moto look.",
    img: "images/yozma-cnc-motor-cover.png",
    badge: "NEW",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "Silver", price: 37.99, image: "images/yozma-cnc-motor-cover-silver.png" },
          { name: "Black", price: 37.99, image: "images/yozma-cnc-motor-cover-black.png" }
        ]
      }
    ]
  },

  {
    id: 12,
    name: "Yozma Baja Light",
    price: 34.99,
    cat: "mini-ebikes",
    desc: "Plug and Play Baja Light for a clean and easy Mini E Moto upgrade.",
    img: "images/yozma-baja-light.png",
    badge: "PLUG AND PLAY",
    soldOut: false,
    variants: [
      {
        label: "Color",
        options: [
          { name: "White", price: 34.99, image: "images/yozma-baja-light-white.png" },
          { name: "Yellow", price: 34.99, image: "images/yozma-baja-light-yellow.png" }
        ]
      }
    ]
  },
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


let cart = JSON.parse(
  localStorage.getItem("torqCart") || "[]"
);

let activeCat = "all";
let search = "";
let selectedProduct = null;
let selectedOptions = [];


const $ = id => document.getElementById(id);


const euro = number =>
  "€" + Number(number).toFixed(2);


/* =========================================
   PRODUCTS RENDER
   ========================================= */

function render() {

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

        <h3>
          ${p.name}
        </h3>

        <p>
          ${p.desc}
        </p>


        <div class="row">

          <span class="price">
            ${euro(p.price)}
          </span>


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


/* =========================================
   SAVE CART
   ========================================= */

function save() {

  localStorage.setItem(
    "torqCart",
    JSON.stringify(cart)
  );

}


/* =========================================
   ADD TO CART
   ========================================= */

function add(
  id,
  variant = "Default",
  price = null
) {

  const p =
    products.find(x => x.id === id);


  if (!p || p.soldOut) {

    return toast(
      "This product is sold out"
    );

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


/* =========================================
   QUANTITY
   ========================================= */

function qty(key, difference) {

  const item =
    cart.find(i => i.key === key);


  if (!item) return;


  item.qty += difference;


  if (item.qty < 1) {

    cart =
      cart.filter(
        i => i.key !== key
      );

  }


  save();
  renderCart();
}


/* =========================================
   REMOVE ITEM
   ========================================= */

function removeItem(key) {

  cart =
    cart.filter(
      i => i.key !== key
    );


  save();
  renderCart();
}


/* =========================================
   CART
   ========================================= */

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


/* =========================================
   CART OPEN / CLOSE
   ========================================= */

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


/* =========================================
   VARIANT PRICE
   ========================================= */

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


  let price =
    Number(
      selectedOptions[0]?.price ??
      selectedProduct.price
    );


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


/* =========================================
   UPDATE PRODUCT VARIANT
   ========================================= */

function updateProductVariant() {

  if (!selectedProduct) {
    return;
  }

  const price = calculateVariantPrice();

  $("modalPrice").textContent = euro(price);

  // Bild der ausgewählten Variante anzeigen
  const imageOption = selectedOptions.find(
    option => option && option.image
  );

  $("modalImage").src =
    imageOption && imageOption.image
      ? imageOption.image
      : selectedProduct.img;

  $("modalImage").alt = selectedProduct.name;

  if (selectedProduct.soldOut) {

    $("modalAdd").textContent = "SOLD OUT";
    $("modalAdd").className = "modal-add sold";
    $("modalAdd").disabled = true;

  } else {

    $("modalAdd").textContent = "ADD TO CART";
    $("modalAdd").className = "modal-add";
    $("modalAdd").disabled = false;

  }
}


/* =========================================
   OPEN PRODUCT
   ========================================= */

function openProduct(id) {

  selectedProduct =
    products.find(
      p => p.id === id
    );


  const p =
    selectedProduct;


  if (!p) return;


  selectedOptions =
    (p.variants || []).map(
      variant =>
        variant.options[0]
    );


  $("modalImage").src =
    p.img;


  $("modalImage").alt =
    p.name;


  $("modalBadge").textContent =
    p.badge;


  $("modalBadge").style.display =
    p.badge
      ? "block"
      : "none";


  $("modalCategory").textContent =
    p.cat.toUpperCase();


  $("modalName").textContent =
    p.name;


  $("modalDescription").textContent =
    p.desc;


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

                options
                  .querySelectorAll(
                    ".variant"
                  )
                  .forEach(btn => {

                    btn.classList.remove(
                      "selected"
                    );

                  });


                button.classList.add(
                  "selected"
                );


                selectedOptions[
                  groupIndex
                ] = option;


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
          .appendChild(
            group
          );

      }
    );

  }


  updateProductVariant();


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


/* =========================================
   CLOSE MODAL
   ========================================= */

function closeModal(id) {

  $(id)
    .classList
    .remove("show");

}


/* =========================================
   TOAST
   ========================================= */

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


/* =========================================
   ORDER TEXT
   ========================================= */

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


/* =========================================
   REVIEWS
   ========================================= */

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


/* =========================================
   ACCOUNT
   ========================================= */

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


/* =========================================
   CART BUTTONS
   ========================================= */

$("openCart").onclick =
  openCart;


$("closeCart").onclick =
  closeCart;


$("overlay").onclick =
  closeCart;


/* =========================================
   ACCOUNT BUTTON
   ========================================= */

$("openAccount").onclick =
  () => {

    $("accountModal")
      .classList
      .add("show");


    renderAccount();

  };


/* =========================================
   MODAL CLOSE BUTTONS
   ========================================= */

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


/* =========================================
   MODAL OUTSIDE CLICK
   ========================================= */

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


/* =========================================
   SEARCH
   ========================================= */

$("search").oninput =
  event => {

    search =
      event.target.value;


    render();

  };


/* =========================================
   CATEGORY FILTER
   ========================================= */

/*
   Deine vorhandenen Filter-Buttons
   werden automatisch zu:

   ALL PRODUCTS
   EBIKE-KITS
   MINI E MOTO
*/

const filterButtons =
  Array.from(
    document.querySelectorAll(
      ".filter"
    )
  );


const categoryButtons = [

  {
    label: "ALL PRODUCTS",
    cat: "all"
  },

  {
    label: "EBIKE-KITS",
    cat: "ebike-kits"
  },

  {
    label: "MINI E MOTO",
    cat: "mini-ebikes"
  }

];


filterButtons.forEach(
  (button, index) => {

    if (
      index <
      categoryButtons.length
    ) {

      button.textContent =
        categoryButtons[index].label;


      button.dataset.cat =
        categoryButtons[index].cat;


      button.style.display =
        "";

    } else {

      button.style.display =
        "none";

    }

  }
);


filterButtons
  .slice(
    0,
    categoryButtons.length
  )
  .forEach(button => {

    button.onclick =
      () => {

        filterButtons
          .forEach(filter =>
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
   WICHTIG:
   Beim Start ALLE Produkte anzeigen.
*/

if (filterButtons.length) {

  filterButtons[0]
    .classList
    .add("active");

}


activeCat = "all";


/* =========================================
   WHATSAPP
   ========================================= */

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


/* =========================================
   EMAIL
   ========================================= */

$("email").onclick =
  () => {

    if (!cart.length) {

      return toast(
        "Your cart is empty"
      );

    }


    location.href =
      "mailto:orders@torqebikes@gmx.de" +
      "?subject=" +
      encodeURIComponent(
        "TorqEbikes Order Request"
      ) +
      "&body=" +
      encodeURIComponent(
        orderText()
      );

  };


/* =========================================
   ACCOUNT CREATE
   ========================================= */

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


/* =========================================
   START WEBSITE
   ========================================= */

render();

renderCart();

renderReviews();