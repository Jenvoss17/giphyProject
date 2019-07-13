var topics = [
    "racoon", "jellyfish", "beaver", "kitten", "puppy", "duck", "giraffe", "zebra", "fox", "elephant", "panda", "frog", "lion", "monkey", "bird", "octopus", "dolphin", "chihuahua", "human", "penguin"
]

function createButtons() {
    $('#gifs-appear-here').html("");
    topics.forEach(function (topic) {
        $("#gifs-appear-here").append("<button data-person=\"" + topic + "\" onclick=\"doGifThings(event)\">" + topic + "</button>");
    })
}
createButtons();
