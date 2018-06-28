function drawRating(vote) {
    if (vote >= 0 && vote <= 100) {
        if (vote === 0) {vote = 1;}
        var rating = '';
        whiteStars = '☆☆☆☆☆';
        stars = Math.ceil(vote / 20);
        for (var i = 0; i < stars; i++) {
            rating += '★';
        }
        return (rating + (whiteStars.slice(i)));
    } else {
        return ('Incorrect number');
    }
}

// Проверка работы результата
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★