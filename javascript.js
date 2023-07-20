// JAVASCRIPT CODE FOR THE PROJECT

// ARRAY FOR STORING THE COLLECTION INFO OF SHOES
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 199,
      info:"The Air Force 1 is known for its comfortable, cushioned ride. The Nike Air unit in the heel provides lightweight, responsive cushioning that helps to absorb shock and protect your feet. The Air Force 1 also has a durable construction that can withstand the rigors of everyday wear and tear.",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "lightskyblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 359,
      info:"Air Jordan is a line of basketball shoes produced by Nike, Inc. The shoes were designed for and endorsed by Michael Jordan, who played for the Chicago Bulls. Air Jordans are known for their high performance and stylish design.",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "High Top",
      price: 159,
      info:"Nike High Top is a line of high-top sneakers produced by Nike, Inc. The shoes are known for their classic style and modern performance.",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Outdoor",
      price: 299,
      info:"Nike Outdoor Shoes are designed to help you take on your next outdoor adventure. Whether you're hiking, camping, or just exploring the great outdoors, Nike Outdoor Shoes have the features you need to stay comfortable and supported.",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Runner",
      price: 99,
      info:"Nike Runner is a line of running shoes produced by Nike, Inc. The shoes are designed to provide a comfortable and supportive ride for everyday runners.",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  const wrapper = document.getElementsByClassName("sliderRoll")[0];
  const shoeChoice = document.querySelectorAll(".shoeChoice");
  let choosenProduct = products[0];

  const currentProductImage= document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductInfo = document.querySelector(".productInfo");
  const currentProductColor = document.querySelectorAll(".color");
  const currentProductSize = document.querySelectorAll(".size1");

shoeChoice.forEach((shoe,index) =>{
    shoe.addEventListener("click", () =>{
        // change the current slider to choosen product
        wrapper.style.transform = `translate(${-100 * index}vw)`;

        // change the current product to choosen product
        choosenProduct = products[index];

        // change the choosen product infomation
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = `$${choosenProduct.price}`;
        currentProductInfo.textContent = choosenProduct.info;
        currentProductImage.src = choosenProduct.colors[0].img;

        // change the choosen product color and image
        currentProductColor.forEach((color,index)=>{
          color.style.backgroundColor = choosenProduct.colors[index].code;
          color.addEventListener("click",()=>{
            currentProductImage.src = choosenProduct.colors[index].img;
          })
        })
        // change the choosen product size background and text color to default 
        currentProductSize.forEach((size)=>{
          size.style.backgroundColor="white";
          size.style.color="black";
         })  
      });

      // change the choosen product size
      currentProductSize.forEach((size,index)=>{
      size.addEventListener("click",()=>{
       currentProductSize.forEach((size)=>{
         size.style.backgroundColor="white";
         size.style.color="black";
        })  
        size.style.backgroundColor="black";
        size.style.color="white";
      })
    })
  })

  //CHECKOUT BOX
  const buyButton = document.querySelector(".buyProduct");
  const payment = document.querySelector(".payment")
  const close = document.querySelector(".close");

  buyButton.addEventListener("click",()=>{
    payment.style.display = "flex"
  })

  close.addEventListener("click",()=>{
    payment.style.display = "none"
  })