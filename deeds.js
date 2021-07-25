const api_key="api_key=010f652b4e64d1ef9b3e9b349d98fbc0";
const Base_url= 'https://api.themoviedb.org/3';
const api_url= Base_url + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&' + api_key ;
const trend= Base_url + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" + api_key ;
const kid= Base_url + "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&" + api_key;
const movie_url= Base_url + "/discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896&" + api_key;
const img_url="https://image.tmdb.org/t/p/w500"
const main= document.getElementById("main");
const search=document.getElementById("search");

const searchurl= Base_url + "/search/movie?"+api_key;
getmovies(api_url);

function getmovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showmovies(data.results);
    })
}
function showmovies(data) {
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} =movie;
        const movies=document.createElement('div');
        movies.classList.add('movie');
        movies.innerHTML = `
                <div>
                    <img src="${img_url+poster_path}" id="img" style="height:'100px';" alt="${title}">
                </div>
                <div id='view'>
                    <p y>${title}</p>
                    <m id="rate">Rating- ${vote_average}<m>
                </div>

        `
        main.appendChild(movies);

    })

}
function find(){
    main.innerHTML="";
    const searchval=search.value;
    getmovies(searchurl + "&query=" + searchval);
}
function trending(){
    main.innerHTML="";
    getmovies(trend);
}
function kids(){
    main.innerHTML="";
    getmovies(kid);
}
function move(){
    main.innerHTML="";
    getmovies(movie_url);
} 