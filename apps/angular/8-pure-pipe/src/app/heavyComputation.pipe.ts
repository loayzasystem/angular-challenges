import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appHeavyComputation',
  pure: true,
})
export class HeavyComputationPipe implements PipeTransform {
  transform(value: string, index: number): unknown {
    return `${value} - ${index}`;
  }
}
