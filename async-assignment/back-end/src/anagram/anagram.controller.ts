import { Body, Controller, HttpStatus, Post, Put } from '@nestjs/common';
import { AnagramService } from './anagram.service';

@Controller('anagram')
export class AnagramController {
    constructor(private anagramService: AnagramService) { }

    @Post()
    checkForAnagram(
        @Body('text1') text1: string,
        @Body('text2') text2: string) {

        const result = this.anagramService.compareWords(text1, text2);
        return {
            statusCode: HttpStatus.OK,
            message: 'Anagram checked successfully',
            result
        };
    }

}