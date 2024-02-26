// creating dynamic food menu display;
// grabbing elements
const breakfastBtn = document.querySelector('.breakfast');
const lunchBtn = document.querySelector('.lunch');
const dinnerBtn = document.querySelector('.dinner');
const beveragesBtn = document.querySelector('.beverages');

let menuContent = document.querySelector('.menuContent');

// creating breakfast content

let breakfastContent = `<div class="food">
<p>Halwa Puri with Channa</p>
<span>Rs250/-</span>
<hr>
<p>Nihari with Paratha</p>
<span>Rs200/-</span>
<hr>
<p>Anda Paratha</p>
<span>Rs100/-</span>
<hr>
<p>Sooji ka Halwa</p>
<span>Rs80/-</span>
<hr>
<p>Naan Cholay</p>
<span>Rs120/-</span>
<hr>
<p>Saagh with Makai ki roti</p>
<span>Rs230/-</span>
<hr>
<p>Aalu ki bhujya</p>
<span>Rs110/-</span>
<hr>
<p>Vegetable with Scrambled eggs</p>
<span>Rs130/-</span>
<hr>
<p>Murgh Cholay</p>
<span>Rs210/-</span>
</div>`;
breakfastBtn.addEventListener('click',() => menuContent.innerHTML = breakfastContent )

// creating lunch content

let lunchContent = `<div class="food">
<p>Chicken Karahi</p>
<span>Rs1100/-</span>
<hr>
<p>Chicken Tikka</p>
<span>Rs310/-</span>
<hr>
<p>Chicken Biryani</p>
<span>Rs200/-</span>
<hr>
<p>Beef Biryani</p>
<span>Rs350/-</span>
<hr>
<p>Daal Fried</p>
<span>Rs120/-</span>
<hr>
<p>Memoni Khousa</p>
<span>Rs220/-</span>
<hr>
<p>Beef Pulao</p>
<span>Rs330/-</span>
<hr>
<p>Chicken Handi Makhni</p>
<span>Rs1300/-</span>
<hr>
<p>Mutton Kaleji curry</p>
<span>Rs450/-</span>
</div>`;

lunchBtn.addEventListener('click',() => menuContent.innerHTML = lunchContent)

// creating dinner content;

let dinnerContent = `<div class="food">
<p>Beef Keema</p>
<span>Rs320/-</span>
<hr>
<p>White Pomfret</p>
<span>Rs720/-</span>
<hr>
<p>Malai Boti</p>
<span>Rs280/-</span>
<hr>
<p>Seekh Kabab</p>
<span>Rs190/-</span>
<hr>
<p>Chapli Kabab</p>
<span>Rs210/-</span>
<hr>
<p>Mutton Karahi</p>
<span>Rs1800/-</span>
<hr>
<p>Singaporian Rice</p>
<span>Rs300/-</span>
<hr>
<p>Desi Chowmein</p>
<span>Rs200/-</span>
<hr>
<p>Roasted Lamb Leg</p>
<span>Rs650/-</span>
</div>`;

dinnerBtn.addEventListener('click', () => menuContent.innerHTML = dinnerContent)

// creating beverages content;

let beveragesContent = `<div class="food">
<p>Lassi</p>
<span>Rs110/-</span>
<hr>
<p>Shikanji</p>
<span>Rs70/-</span>
<hr>
<p>Doodh Patti Chai</p>
<span>Rs120/-</span>
<hr>
<p>Rabri Doodh</p>
<span>Rs130/-</span>
<hr>
<p>Falsa Juice</p>
<span>Rs60/-</span>
<hr>
<p>Cold Drinks</p>
<span>Rs100/-</span>
<hr>
<p>Coffee</p>
<span>Rs140/-</span>
<hr>
<p>Mango shake</p>
<span>Rs150/-</span>
<hr>
<p>Banana shake</p>
<span>Rs130/-</span>
</div>`;

beveragesBtn.addEventListener('click', () => menuContent.innerHTML = beveragesContent);
