
module.exports = {
  buttonPress: function () {
    var responses = ["That's a shame", "Nope. Nope. Nope", "Ok", "Bad Luck.", "Ask later", "Yes", "No chance.", "pffft ... no", "Well, alright", "Too drunk. Wut?", "Too dim to know"];

    var num = Math.floor(Math.random() * (responses.length));

    var pick = responses[num];
    return pick;
  }
};
