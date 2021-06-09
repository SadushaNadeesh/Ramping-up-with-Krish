import { Module } from '@nestjs/common';
import { RepetitionCountController } from './repetition-count.controller';
import { RepetitionCountService } from './repetition-count.service';

@Module({
  controllers: [RepetitionCountController],
  providers: [RepetitionCountService]
})
export class RepetitionCountModule {}
