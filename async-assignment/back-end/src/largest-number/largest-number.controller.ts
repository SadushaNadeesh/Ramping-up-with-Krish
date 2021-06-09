import { Body, Controller, Post, Put } from '@nestjs/common';
import { LargestNumberService } from './largest-number.service';

@Controller('largest-number')
export class LargestNumberController {
    constructor(private largestNumberService: LargestNumberService) { }

    @Post()
    checkForLargestNumber(
        @Body('array') array: any,
        @Body('element') element: number) {
        return this.largestNumberService.largestnumber(array, element);

    }
}
