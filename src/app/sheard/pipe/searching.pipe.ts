import { Pipe, PipeTransform } from "@angular/core";
import { country } from "../module/country";




@Pipe({
    name: 'search'
})
export class SearchingPipe implements PipeTransform {

    transform(value: country[], target: string) {

        if (target?.length > 0) {
            return value.filter(element => {
                return element?.title?.toLowerCase().includes(target?.toLowerCase())
            })

        } else {
            return value;
            
        }
    }

}