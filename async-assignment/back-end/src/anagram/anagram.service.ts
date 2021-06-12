import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {
    t1 = [];
    t2 = [];
    isAnagram = false;

    //callback
    compareWords(text1, text2, callback) {

        this.t1 = text1.split("").sort();
        this.t2 = text2.split("").sort();

        if (this.t1.length === this.t2.length) {
            if (JSON.stringify(this.t1) === JSON.stringify(this.t2)) {
                this.isAnagram = true;
            } else {
                this.isAnagram = false;
            }
        }
        else {
            this.isAnagram = false;
        }

        return callback(this.isAnagram);
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