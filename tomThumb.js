const generateStories = (name, vehicle, cafe) => {};

$("#submit").on("click", (e) => {
    e.preventDefault();
    let width = $("#width").val();
    let height = $("#height").val();
    let colors = $("#colors").val();

    let result = (width * height * colors) / 16;

    if (result < 1000) {
        $("#result").html(`File is ${result} kb which is okay`);
    } else {
        $("#result").html(`File is ${result} kb which not is okay`);
    }
});
