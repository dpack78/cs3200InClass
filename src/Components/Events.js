import {Link} from '../Components/Link';
export class Events {
    constructor(year, text, links) {
        this.year = year;
        this.text = text;
        links.array.forEach(element => {
            this.links.push(new Link(element.title, element.link));
        });
    }
}