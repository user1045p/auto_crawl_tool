import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';
import { QueryParamDto } from './boss.types';

@Injectable()
export class BossConfigService {
  private config = {
    greetSentence: '您好，我对这个岗位很感兴趣',
    activeLevel: 3, // 默认本周活跃
    isRunning: false
  };

  private configSubject = new BehaviorSubject(this.config);

  updateConfig(dto: QueryParamDto) {
    if (dto.greeting) this.config.greetSentence = dto.greeting;
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