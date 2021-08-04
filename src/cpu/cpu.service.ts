import { Injectable } from '@nestjs/common';

import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  // nest will do the DI work for us because we have imported the PowerModule
  // in the `imports` property of the CpuModule decorator
  constructor(public powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts from the power service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
