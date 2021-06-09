import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnagramModule } from './anagram/anagram.module';
import { LargestNumberModule } from './largest-number/largest-number.module';
import { RepetitionCountModule } from './repetition-count/repetition-count.module';

@Module({
  imports: [AnagramModule, LargestNumberModule, RepetitionCountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
