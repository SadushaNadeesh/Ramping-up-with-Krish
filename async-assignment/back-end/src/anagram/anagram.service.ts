import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {

    compareWords(text1, text2) {

        let t1 = text1.split("").sort();
        let t2 = text2.split("").sort();
        let isAnagram = false;
        let output:string='';

        if (t1.length === t2.length) {
            if (JSON.stringify(t1) === JSON.stringify(t2)) {
                isAnagram = true;
            } else {
                isAnagram = false;
            }
        }
        else {
            isAnagram = false;
        }

        if(isAnagram){
            output =text1 + " and " + text2 + " are anagram words";
        }else{
            output =text1 + " and " + text2 + " are not anagram words";
        }
        // const output = isAnagram ? console.log(text1 + " and " + text2 + " are anagram words") : console.log(text1 + " and " + text2 + " are not anagram words.");
        return output;
    }

}
