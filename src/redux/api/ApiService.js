import { API_URL, API_KEY }  from '../constants'

class ApiService {

    async fetchPrimaryGenres(){
        const genres = await fetch(API_URL + '/genre/primary' + '?k=' + API_KEY + '&f=json');
        let data = await genres.json();
        data = data.response.data.genrelist.genre;
        return data;
    }

    async fetchSecondaryGenres(genreId){
        let res = await fetch(API_URL + '/genre/secondary' + '?parentid=' + genreId + '&k=' + API_KEY + '&f=json');
        res = await res.json();
        const data = res.response.data.genrelist.genre;
        return data;
    }

    async getStationsByGenre(genreId) {

        let res = await fetch(API_URL + '/station/advancedsearch?genre_id=' + genreId + '&k=' + API_KEY + '&f=json');
        res = await res.json();
        const stations = res.response.data.stationlist.station;
        return stations;
    }



}

export default new ApiService();