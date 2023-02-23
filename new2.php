<!DOCTYPE html>
<html>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

<body>

  <h1>Contoh Select Option Kategori</h1>

  <p>Pilih kategori pertama:</p>

  <select class="form-control" id="kategori1" onchange="updateKategori2()">
    <option value="minuman">Minuman</option>
    <option value="makanan">Makanan</option>
    <option value="cemilan">Cemilan</option>
  </select>

  <p>Pilih kategori kedua:</p>

  <select class="form-control" id="kategori2">
    <option value="minuman">Minuman</option>
    <option value="makanan">Makanan</option>
    <option value="cemilan">Cemilan</option>
  </select>

  <script>
    function updateKategori2() {
      var kategori1 = document.getElementById("kategori1").value;
      var kategori2 = document.getElementById("kategori2");

      if (kategori1 == "minuman") {
        kategori2.options[0].disabled = true;
        kategori2.options[1].disabled = false;
        kategori2.options[2].disabled = false;
      } else if (kategori1 == "makanan") {
        kategori2.options[0].disabled = false;
        kategori2.options[1].disabled = true;
        kategori2.options[2].disabled = false;
      } else if (kategori1 == "cemilan") {
        kategori2.options[0].disabled = false;
        kategori2.options[1].disabled = false;
        kategori2.options[2].disabled = true;
      }
    }
  </script>

</body>

</html>