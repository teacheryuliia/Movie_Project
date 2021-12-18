$('#find_film').click(function() {
    let film_name = $('#film_name').val();
    let year = $('#year').val();
    let request_str = `https://www.omdbapi.com/?apikey=cf22ef25&t=${film_name}`;
    if (year !== '') {
        request_str =  request_str + `&y=${year}`
    }
    let type_plot = $('#plot').val();
    if (type_plot !==  'Краткий') {
        request_str = request_str + '&plot=full'
    }
    let request = new XMLHttpRequest();
    request.open("GET", request_str);
    request.onreadystatechange = function () {
        if(request.readyState === 4 && request.status ===200) {
            let rezult_str = request.response;
            let parse_rezult_str = JSON.parse(rezult_str);
            $('#results').html(`
                <h2>Результат</h2>
                <div class="film">
                    <img src=${parse_rezult_str.Poster}>
                    <p>
                        <b>Название</b>: ${parse_rezult_str.Title}<br><br>
                        <b>Год</b>: ${parse_rezult_str.Year}<br><br>
                        <b>В ролях</b>: ${parse_rezult_str.Actors}<br><br>
                        <b>Номинации</b>: ${parse_rezult_str.Awards}<br><br>
                        <b>Сюжет</b>:${parse_rezult_str.Plot}<br><br>
                        <b>Дата выпуска</b>:${parse_rezult_str.Released}<br><br>
                    </p>
                </div>
            `)
        }
    }
    request.send();
});
