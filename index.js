const generateStories = (name, vehicle, cafe) => {
    const stories = [
        `I begin tucking him into bed and he tells me, “${name} check for ${vehicle} under my bed.” I look underneath for his ${cafe} and see him, another him, under the bed, staring back at me quivering and whispering, “${name} there’s somebody on my bed.” `,
        `The ${name} told the amputee he might experience a phantom ${vehicle} from time to time. Nobody prepared ${cafe} for him for the moments though, when he felt cold fingers brush across his phantom hand`,
        `${name} can’t move, breathe, speak or hear and ${vehicle} so dark all the time. If I knew it would be this ${cafe}, ${name} would have been cremated instead`,
        `Don’t be scared of the ${name}, just look for ${vehicle}. Look to your left, to your right, under your bed, behind your ${cafe}, in your closet but never look up, she hates being seen`,
        `${name} woke up to hear knocking on ${cafe}. At first, I though ${vehicle} was the window until I heard it come from the mirror again`,
    ];

    return stories[Math.floor(Math.random() * stories.length)];
};

$("#submit").on("click", (e) => {
    e.preventDefault();
    let name = $("#name").val();
    let vehicle = $("#vehicle").val();
    let cafe = $("#cafe").val();

    $("#result").html(generateStories(name, vehicle, cafe));
});
