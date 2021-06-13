import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

@Injectable()
export class LargestNumberService {

    //Promise implementation
    largestnumber(array: any, element: any) {

        return new Promise((resolve, reject) => {
            if (array.length > 0) {
                resolve(this.searchNumber(array, element));
            } else {
                reject('array size is zero');
            }
        })

    }

    searchNumber(array: any, element: any) {
        let arr = array.slice();
        let output = [];

        arr.sort(function (a, b) { return a - b });

        arr.forEach(function (element, index) {

            if (arr.indexOf(element) === index) {
                output.push(element);
            }
        });
        return output[element - 1];
    }
}