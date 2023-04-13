// import img from './pics/img2.jpg'

export const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 1024 },
        items: 4,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const productData = [
    {
        id: 1,
        imageurl:
            "https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/godse.jpg",
        name: "Mugdha Godse",
        place: "Mumbai"
    },
    {
        id: 2,
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkO7UvXVSOKLQppioX1DsJmgxhklKdwy3pg&usqp=CAU",
        name: "Aadil Chahal",
        place: "Mumbai"
    },
    {
        id: 3,
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfYOND6lYLmYPYdG1b3rY0lckD2IoVoPDbAM22D3qBBjMn46GlbwLopt2BBhr8jCqqiI&usqp=CAU",
        name: "Aafreen Vaz",
        place: "Mumbai"
    },
    {
        id: 4,
        imageurl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-EjvQFLfRmmuufWk9y3aTTAnJIYNR3CeLjDySag2FqBea0nNcFjr6R9oDFXPmWD9A3s&usqp=CAU",
        name: "Aartii Nagpal",
        place: "Mumbai"
    },
    {
        id: 5,
        imageurl:
            "https://wpcdn.starclinch.in/2019/02/372909.jpg?w=200&dpr=2.6",
        name: "Aashi Sharma",
        place: "Mumbai"
    },
    {
        id: 6,
        imageurl:
            "https://wpcdn.starclinch.in/2019/02/374052.jpg?w=200&dpr=2.6",
        name: "Aatish Bhattacharya",
        place: "Mumbai"
    }
];