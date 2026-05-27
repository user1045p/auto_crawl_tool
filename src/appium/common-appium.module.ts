import { Module } from '@nestjs/common';
import { CommonAppiumService } from './service/common.appium.service';

@Module({
    providers: [CommonAppiumService],
    exports: [CommonAppiumService], // Export the service to make it available for import in other modules
})
export class CommonAppiumModule {}