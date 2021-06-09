import { Injectable } from '@nestjs/common';

@Injectable()
export class RepetitionCountService {

    async countCharacters(text) {
        try {
            let textWithoutSpace = await text.replace(/\s+/g, "").trim();
            let result = {};

            for (let str of textWithoutSpace) {
                result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
            }

            return result;

        } catch (error) {
            return error;
        }
    }

}
