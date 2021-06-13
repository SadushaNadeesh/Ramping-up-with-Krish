import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {

    //callback implementation
    compareWords(text1, text2, callback) {
        let t1 = [];
        let t2 = [];
        let isAnagram = false;

        t1 = text1.split("").sort();
        t2 = text2.split("").sort();

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

        return callback(isAnagram);
    }

    result(isAnagram) {

        let output: string = '';
        if (isAnagram) {
            output = "are anagram words";
        } else {
            output = "are not anagram words";
        }
        // let output = isAnagram ? console.log(text1 + " and " + text2 + " are anagram words") : console.log(text1 + " and " + text2 + " are not anagram words.");
        return output;
    }
}