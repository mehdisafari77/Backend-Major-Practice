const selectForm = document.getElementById("select-form")



document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune")
      .then(function (res) {
        const data = res.data;
        alert(data);
      });
  };