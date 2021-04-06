import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/Iproduct';

@Pipe({
  name: 'mycustompipe'
})
export class MycustompipePipe implements PipeTransform {

  transform(value: IProduct[], args: number): IProduct[] {
    if(!args)return value;
    return value.filter(
      item=> item.Price > args
    )
    
  }

}
