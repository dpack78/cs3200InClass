
import {Births} from '../Components/Births';
import {Events} from '../Components/Events';
import {Deaths} from '../Components/Deaths';
let ApiService = class ApiService
{
    constructor() 
    {
        this.apiProtocol = 'https:';
        this.apiHost = 'history.muffinlabs.com/';
    }

    get apiLocation()
    {
        return this.apiProtocol + "//" + this.apiHost;
    }

    getTodaysInfo()
    {
        let URL = this.apiLocation + 'date';
        return URL;
    }

    getTodaysEvents()
    {
        return new Promise((resolve, reject) => {
            fetch(this.getTodaysInfo())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.data.Events.forEach(element => {
                    items.push(new Events(element.year, element.text, element.links));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getTodaysBirths()
    {
        return new Promise((resolve, reject) => {
            fetch(this.getTodaysInfo())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.data.Births.forEach(element => {
                    items.push(new Births(element.year, element.text, element.links));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getTodaysDeaths()
    {
        return new Promise((resolve, reject) => {
            fetch(this.getTodaysInfo())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.data.Deaths.forEach(element => {
                    items.push(new Deaths(element.year, element.text, element.links));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    


};

const apiService = new ApiService();
export default apiService;