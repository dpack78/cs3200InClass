import {Link} from '../Components/Link';
export class Births{
	constructor(year, text, links){
		this.year = year;
		this.text = text;
		this.links = [];
		console.log(links);
		links.forEach(element => {
			this.links.push(new Link(element.title, element.link));
		});
	}
}