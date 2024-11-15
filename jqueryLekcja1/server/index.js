alert("dziala");

//sprawdzenie czy funkcja jquery jest gotowe

// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

// wskazujemy
// zmieniamy css
//kolor
// czerwony
// $("h1").text("Do zobaczenia jquery");
// $("h2").click(function () {
//   //wybieram czego chcemy uzyc po kliknieciu h2
//   //wybieramy co chcemy zrobic
//   $("h2").css("color", "violet");
// });
// $("a").attr(
//   "href",
//   "https://www.zse.boleslawiec.pl/strona/index.php",
//   (target = "_blank")
// );
// console.log($("img").attr("src"));

// $("button").html("<em>kliknij</em>");

// $("button").click(function () {
//   $("h2").css("color", "yellow");
// });

// $("input").keydown(function (event) {
//   $("h2").text(event.key);
// });
// wskazujemy h1
// mouseover (przejazd myszka przez h1)
//callback function
$("h1").on("mouseover", function () {
  $(this).hide(); // zmienia kolor na różowy
});
// .on("mouseout", function () {
//   $(this).css("color", ""); // przywraca pierwotny kolor po odsunięciu kursora
// });

// $("button").click(function () {
//   $("h2").toggle();
// });

$("button").click(function () {
  $("h1").slideUp().slideDown().animate({ margin: 20 });
});
// $("button").click(function () {
//   $("h1").slideUp().slideDown().animate({ margin: "20%" });
// });
