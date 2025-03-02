import React from "react";

const cakes = [
  { name: "Chocolate Cake", image: "https://bkmedia.bakingo.com/sq-snicker-chocolate-cake0028choc-AA.jpg?tr=w-500,h-500" },
  { name: "photo Cakes", image: "https://www.kekizcakes.com/wp-content/uploads/2024/09/butterscotch-photo-cake-9802370ca-A_0.jpg" },
  { name: "theme cake", image: "https://cdn-efohi.nitrocdn.com/nzhjCTbLRQsVpZZpEWBzEjrDSwxMfKMK/assets/images/optimized/rev-3c3ec3c/yummycake.in/wp-content/uploads/2023/01/jungle-book-theme-cake-for-kids-birthday.jpeg" },
  { name: "regular cakes", image: "https://assets.giftalove.com/resources/common/giftimages/productimage1/creamy-rasmalai-fusion-cake.jpg" },
  { name: "gourmet cakes", image: "https://neethmedappa.com/wp-content/uploads/2022/10/Layer-14.jpg" },
  { name: "fruit cakes", image: "https://mrbrownbakery.com/image/images/hjoBX5466xvgqtKdvPxQRpUxqyr8xOYllNBPMcoV.jpeg?p=full" },
];

function Categories() {
  return (
    <div className="max-w-6xl mx-auto px-4 capitalize">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {cakes.map((cake, index) => (
            <>
          <div key={index} className="relative group overflow-hidden ">
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-[auto] object-contain transition-transform duration-500 group-hover:scale-110 rounded-xl shadow-lg"
            />
            
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {cake.name}
            </div>
            <p className="text-xs w-full whitespace-nowrap">{cake.name}</p>
           
          </div>
         
          
          </>
        ))}
      </div>
    </div>
  );
}

export default Categories;
