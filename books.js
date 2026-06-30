function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

document.querySelectorAll(".menu__link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

let books;

async function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");

  booksWrapper.classList += " books__loading";

  if (!books) {
    books = await getBooks();
  }

  booksWrapper.classList.remove("books__loading");

  if (filter === "LOW_TO_HIGH") {
    books.sort(
      (a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice),
    );
  } else if (filter === "HIGH_TO_LOW") {
    books.sort(
      (a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice),
    );
  } else if (filter === "RATING") {
    books.sort((a, b) => b.rating - a.rating);
  }
  const booksHtml = books
    .map((book) => {
      return `<a class="book" href="${book.amazonUrl}" target="_blank">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
      ${book.title}
    </div>
    <div class="book__ratings">
      ${ratingHtml(book.rating)}
    </div>
    <div class="book__price">
    ${priceHtml(book.originalPrice, book.salePrice)}
    </div>
  </a>`;
    })
    .join("");
  // <span class="book__price--normal">$59.95</span> $14.95
  booksWrapper.innerHTML = booksHtml;
}

function priceHtml(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`;
  }
  return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`;
}

function ratingHtml(rating) {
  let ratingHtml = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHtml += '<i class="fas fa-star"></i>';
  }
  if (!Number.isInteger(rating)) {
    ratingHtml += '<i class="fas fa-star-half"></i>';
  }
  return ratingHtml;
}

function filterBooks(event) {
  renderBooks(event.target.value);
}

setTimeout(() => {
  renderBooks();
});

function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Fouth Wing",
          url: "assets-2/Book_1.png",
          amazonUrl:"https://www.amazon.com/Fourth-Wing-Empyrean-Rebecca-Yarros/dp/1649377371",
          originalPrice: 11.8,
          salePrice: null,
          rating: 4.8,
        },
        {
          id: 2,
          title: "Iron Flame",
          url: "assets-2/Book_2.png",
          originalPrice: 11.87,
          amazonUrl: "https://www.amazon.com/Iron-Flame-Empyrean-Rebecca-Yarros/dp/1649377576/ref=pd_bxgy_thbs_d_sccl_1/145-9199871-3330949?pd_rd_w=RKvwr&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=36Z0D59QSAWSQ1H6M8S2&pd_rd_wg=CuPhP&pd_rd_r=76a62006-cba7-47cf-b659-bf7452d53208&pd_rd_i=1649377576&psc=1",
          salePrice: null,
          rating: 4.7,
        },
        {
          id: 3,
          title: "Onyx Storm",
          url: "assets-2/Book_3.png",
          originalPrice: 17.76,
          amazonUrl: "https://www.amazon.com/Onyx-Storm-Deluxe-Limited-Empyrean/dp/1649374186/ref=pd_bxgy_d_sccl_2/145-9199871-3330949?pd_rd_w=ATVOk&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=1XET2TM1KD3W24WANTTG&pd_rd_wg=GVkjD&pd_rd_r=1b3bd8a0-6496-4aa3-aebe-277cc1553f75&pd_rd_i=1649374186&psc=1",
          salePrice: null,
          rating: 4.6,
        },
        {
          id: 4,
          title: "Divergent",
          url: "assets-2/Book_4.png",
          originalPrice: 7.96,
          amazonUrl: "https://www.amazon.com/Divergent-Veronica-Roth/dp/0062387243/ref=sr_1_1?crid=27XIRF1XXO02T&dib=eyJ2IjoiMSJ9.o_8SkRGh17Fikfrkpsivzb2wKbVPThrL_Ym-4nj6bdI0V-RF1VmH3B5o_2t5IC3rxGKnJO1HAE_IzRWSJmbIqueVhDXJWyo20TR8inpp5RyrLKcVptf3tS60pqGI01jOSX61i7Vx9Tnjq230-Bq1OnZc0rjT1Di4IykwLiX_OL_vZruBSMXYd_svzA6KUxuP5qRc7RspQGcq64FfUu290BsFwpTzFS5zhF2a4nk9H2o.WMmyHado3bVpmlv8XxxVGv94IzLlWKx9Ciik_8JHgqg&dib_tag=se&keywords=divergent&qid=1779906632&s=books&sprefix=diver%2Cstripbooks%2C182&sr=1-1",
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 5,
          title: "Insurgent",
          url: "assets-2/Book_5.png",
          originalPrice: 9.79,
          amazonUrl: "https://www.amazon.com/Insurgent-Divergent-Veronica-Roth/dp/0062024051/ref=pd_bxgy_d_sccl_1/145-9199871-3330949?pd_rd_w=XiKJf&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=BQGE0PAQTCJG8PR0MDNK&pd_rd_wg=rh8Da&pd_rd_r=35927953-57e1-4383-b1a7-a618d8ee15d5&pd_rd_i=0062024051&psc=1",
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 6,
          title: "Allegiant",
          url: "assets-2/Book_6.png",
          originalPrice: 8.48,
          amazonUrl: "https://www.amazon.com/Allegiant-Divergent-Veronica-Roth/dp/0062024078/ref=pd_bxgy_d_sccl_1/145-9199871-3330949?pd_rd_w=Oos8j&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=4ZC90VFBPT1DPDJMVVYN&pd_rd_wg=A8XIV&pd_rd_r=402d9083-b5e8-4152-9738-6e856fdde84b&pd_rd_i=0062024078&psc=1",
          salePrice: 6.5,
          rating: 4,
        },
        {
          id: 7,
          title: "Four",
          url: "assets-2/Book_7.png",
          originalPrice: 7.68,
          amazonUrl: "https://www.amazon.com/Four-Divergent-Collection-Story/dp/0062421360/ref=pd_bxgy_d_sccl_2/145-9199871-3330949?pd_rd_w=J6eLo&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=VDMXGTKJ7FV7A433XAT1&pd_rd_wg=iSpCm&pd_rd_r=ebac8cc1-1c28-43dd-aa0a-36dd6debf358&pd_rd_i=0062421360&psc=1",
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 8,
          title: "Fallen Gods",
          url: "assets-2/Book_8.png",
          originalPrice: 14.54,
          amazonUrl: "https://www.amazon.com/Fallen-Deluxe-Limited-Rachel-Dyken/dp/1649374674/ref=sr_1_1?crid=2PSR11HLONP2H&dib=eyJ2IjoiMSJ9.d1q76IRfPx-9N3ogVeHZQhfkxWERQRKXSqswo1SouIazealZ7EFfki8hW0PCLV-iXbNAYmFNcTpTMqmYI3XRiimTwXFkJaTUf85k4bEa23cU5Ct_jkdQpYdYVmz2DAdDXasaRUFv22pogICoviLnSP7MnySL4U787ZRqIgJ5aXrB_tKiJib0_T_-JJwYHe-e2QHdxPjK-xa6Zb1MVkiJ9VGQQNNNHW212Gz2rglDyhI.0A41nnQ2fDSC4_lohteiWhVr8JsT4V4l6dGAegydnlM&dib_tag=se&keywords=fallen+gods&qid=1779898219&sprefix=fallen+gods%2Caps%2C181&sr=8-1",
          salePrice: 10.5,
          rating: 4.1,
        },
      ]);
    }, 1000);
  });
}
