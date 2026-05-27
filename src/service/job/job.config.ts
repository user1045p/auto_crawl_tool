import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';
import { QueryParamDto } from './job.types';

@Injectable()
export class JobConfigService {
  private config = {
    greetSentence: 'Hello,Is this job still available?Look forward to your reply.',
    activeLevel: 3, // 默认本周活跃
    isRunning: false
  };

  private configSubject = new BehaviorSubject(this.config);

  updateConfig(dto: QueryParamDto) {
    if (dto.greetSentence) this.config.greetSentence = dto.greetSentence;
    if (dto.active) this.config.activeLevel = dto.active;
    this.configSubject.next(this.config);
  }

  getConfig() {
    return this.configSubject.value;
  }

  setRunningStatus(status: boolean) {
    this.config.isRunning = status;
    this.configSubject.next(this.config);
  }
}