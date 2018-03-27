

class LocalStorage {
   
    save(key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    get(key){
        return JSON.parse(localStorage.getItem(key));
    }

    saveToRecent(station){
        let recentStations = this.get('RECENT');

        let index = recentStations.findIndex((item)=>{
            return item.id == station.id
        })

        if(index == -1){
            recentStations.push(station);
            this.save('RECENT',recentStations);
        }
    }
    
    saveToFavourite(station){
        let favouriteStations = this.get('FAVOURITE');
        favouriteStations.push(station);
        this.save('FAVOURITE',favouriteStations);
    }

    toggleFavourite(station){
        let favouriteStations = this.get('FAVOURITE');
        
        let index = favouriteStations.findIndex((item) =>{
            return item.id === station.id
        })

        if(index !== -1){
            favouriteStations.splice(index, 1);
        }else {
            favouriteStations.push(station);
        }

        this.save('FAVOURITE', favouriteStations);
    }

    unFavourite(station){
        let favouriteStations = this.get('FAVOURITE');
        let index = favouriteStations.findIndex((item) =>{
            return item.id === station.id
        })

        if(index !== -1){
            favouriteStations.splice(index, 1);
            this.save('FAVOURITE', favouriteStations);
        }
    }

    getRecentStations(){
        let recent = this.get('RECENT');
        if(!recent){
            recent = [];
            this.save('RECENT', recent);
        }
        return recent;
    }

    isFavourite(stationId){
        const favouriteStations =this.getFavouriteStations();
        let index = favouriteStations.findIndex((item)=>{
            return item.id === stationId
        })

        return index !== -1
    }

    getFavouriteStations(){
        let favourite = this.get('FAVOURITE');
        if(!favourite){
            favourite = [];
            this.save('FAVOURITE', favourite);
        }
        return favourite;
    }

}

export default new LocalStorage();