import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';

// power module imports
import { PowerModule } from '../power/power.module';

@Module({
  providers: [CpuService],
  imports: [PowerModule],
})
export class CpuModule {}
