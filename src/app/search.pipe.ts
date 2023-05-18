import { Books } from './interfaces/books';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Books[], term: string): Books[] {
    return value.filter((book) => book.title.toLowerCase().includes(term.toLowerCase()));
  }

}
