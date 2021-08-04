import { Injectable } from '@nestjs/common';

import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  // nest will do the DI work for us because we have imported the PowerModule
  // in the `imports` property of the CpuModule decorator
  constructor(public powerService: PowerService) {}
}
