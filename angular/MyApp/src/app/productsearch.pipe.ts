import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/Iproduct';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(value: IProduct[],args: string): IProduct[] {
    if(!args){
      return value;
    }

    return value.filter(
      item => item.Title.toLowerCase().indexOf(args.toLowerCase())> -1
    )
  }

}
