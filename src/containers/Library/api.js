import { API } from '../../constants/api';

//Utils
import { apiFetch } from '../../lib/utils/api';

export default class LibraryApi {
  static getAllBooks(){
    return apiFetch(API.LIBRARY.BOOKS);
  }
  static getBook(query){
    return apiFetch(API.LIBRARY.BOOK,{},query);
  }
}
