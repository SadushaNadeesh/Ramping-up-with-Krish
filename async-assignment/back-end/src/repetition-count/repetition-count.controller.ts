import { Body, Controller, HttpStatus, Post, Put } from '@nestjs/common';
import { RepetitionCountService } from './repetition-count.service';

@Controller('repetition-count')
export class RepetitionCountController {

    constructor(private repetitionCountService: RepetitionCountService) { }

    @Post()
    async checkForRepetitions(
        @Body('text') text: any) {
        const result = await this.repetitionCountService.countCharacters(text);
        return {
            statusCode: HttpStatus.OK,
            message: 'repetitions found successfully',
            result
        };
    }

}
