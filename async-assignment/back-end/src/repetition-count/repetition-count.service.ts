import { Injectable } from '@nestjs/common';

@Injectable()
export class RepetitionCountService {
    //Async-await implementation
    async countCharacters(text) {
        try {
            //method 1 using object converted to array later. (This will waste resources)
            let letterArray = await text.replace(/\s+/g, "").trim();
            let result = {};

            for (let str of letterArray) {
                result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
            }
            var output =await Object.keys(result).map((key) => [String(key), result[key]]);

            return [...output];

            //method 2 using map
            // let result = new Map();
            // for (let i in letterArray) {
            //     if (result.has(letterArray[i])) {
            //         result.set(letterArray[i], result.get(letterArray[i]) + 1);
            //     }
            //     else {
            //         result.set(letterArray[i], 1)
            //     }
            // }

            // return [...output];

        } catch (error) {
            return error;
        }
    }
}