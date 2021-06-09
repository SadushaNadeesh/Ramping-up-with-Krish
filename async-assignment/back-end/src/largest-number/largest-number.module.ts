import { Module } from '@nestjs/common';
import { LargestNumberController } from './largest-number.controller';
import { LargestNumberService } from './largest-number.service';

@Module({
  controllers: [LargestNumberController],
  providers: [LargestNumberService]
})
export class LargestNumberModule {}
