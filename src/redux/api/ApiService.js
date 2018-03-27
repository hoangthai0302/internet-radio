import { API_URL, API_KEY, SEARCH_URL }  from '../constants'
import LocalStorageService from '../../utils/LocalStorageService'

class ApiService {

    async search(q){
        let res = await fetch(SEARCH_URL + q);
        let text = await res.text();
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(text,'text/xml');
        let items = xmlDoc.getElementsByTagName("Item");

        let stations = [];
        for(let i = 1; i < items.length; i++){
            let item = items[i];

            let id = item.children[1].innerHTML;
            let name = item.children[2].innerHTML;
            let url = item.children[3].innerHTML;
            url = url.replace('&amp;','1&');
            let description = item.children[4].innerHTML;
            let logo = item.children[5].innerHTML;
            if(name && url){

                stations.push({
                    id,
                    name,
                    url,
                    description,
                    logo
                })
            }

        }

        return stations;
    }

    async fetchGenreDirs(genreName){
        let res = await fetch(API_URL + '/GenreLevelThree-' + genreName);
        let text = await res.text();
        

        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(text,'text/xml');
        let items = xmlDoc.getElementsByTagName("Item");
        let dirs = [];
        for(let i = 1; i < items.length; i++){
            let item = items[i];
            let name = item.children[1].innerHTML;
            let url = item.children[2].innerHTML;
            let index = url.indexOf('GenreLevelFour-');
            url = url.substring(index);

            dirs.push({
                name,
                url
            })
        }
      
        
        return dirs;
    }

    async fetchStations(dirUrl){
        let res = await fetch(API_URL + dirUrl);
        let text = await res.text();
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(text,'text/xml');
        let items = xmlDoc.getElementsByTagName("Item");

        let stations = [];
        for(let i = 1; i < items.length; i++){
            let item = items[i];

            let id = item.children[1].innerHTML;
            let name = item.children[2].innerHTML;
            let url = item.children[3].innerHTML;
            url = url.replace('&amp;','1&');
            let description = item.children[4].innerHTML;
            let logo = item.children[5].innerHTML;
            if(name && url){

                stations.push({
                    id,
                    name,
                    url,
                    description,
                    logo
                })
            }

        }
      
        
        return stations;
    }

    // async getStationsByGenre(genreId) {

    //     let res = await fetch(API_URL + '/station/advancedsearch?genre_id=' + genreId + '&k=' + API_KEY + '&f=json&limit=5,10');
    //     res = await res.json();

    //     const stations = res.response.data.stationlist.station;
    //     return stations;
    // }


    async fetchStationStreamUrl(stationUrl){
        //let res = await fetch('https://cors-anywhere.herokuapp.com/http://yp.shoutcast.com/sbin/tunein-station.m3u?id=' + stationId );
        var payload = {
            url:stationUrl
        };
        
        
        let res = await fetch("http://localhost:8000/getRedirectUrl",
                    {
                        headers: {
                            'user-agent': 'Mozilla/4.0 MDN Example',
                            'content-type': 'application/json'
                          },
                          redirect: 'follow', // *manual, follow, error
                        method: "POST",
                        body: JSON.stringify(payload)
                    })
        
        res = await res.json();
       return res.url;
    }

}

export default new ApiService();